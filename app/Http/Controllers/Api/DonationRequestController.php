<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\ImageService;
use App\Models\DonationRequest;
use App\Http\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\DonationRequsetResource;
use App\Http\Requests\DonationStoreRequestRequest;
use App\Http\Requests\DonationUpdateRequestRequest;

class DonationRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $DonationRequests = DonationRequest::where('user_id', auth()->id())->get();

        if ($DonationRequests->isNotEmpty()) {
            return ApiResponse::sendResponse(
                200,
                'Donation Requests',
                DonationRequsetResource::collection($DonationRequests)
            );
        }

        return ApiResponse::sendResponse(200, 'No Donation Requests found', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DonationStoreRequestRequest $request)
    {

        $validatedData = $request->validated();
        $validatedData['user_id'] = auth()->id();
        if ($request->hasFile('image')) {
            $validatedData['image'] = ImageService::uploadImage($request->file('image'), 'donation_requests');
        }
        DonationRequest::create($validatedData);

        return ApiResponse::sendResponse(
            200,
            'Donation Request created successfully',
            []
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(DonationRequest $donationRequest)
    {
        
        if (!$donationRequest) {
            return ApiResponse::sendResponse(
                200,
                'Donation Request not found',
                []
            );
        }
        return ApiResponse::sendResponse(
            200,
            'Donation Request Details',
            new DonationRequsetResource($donationRequest)
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DonationUpdateRequestRequest $request, DonationRequest $donationRequest)
    {
        $validatedData = $request->validated();
        if ($request->hasFile('image')) {
            $validatedData['image'] = ImageService::uploadImage($request->file('image'), 'donation_requests');
            ImageService::deleteImage($donationRequest->image);
        }
        $donationRequest->update($validatedData);
        return ApiResponse::sendResponse(
            200,
            'Donation Request updated successfully',
            $donationRequest
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DonationRequest $donationRequest)
    {
        if ($donationRequest->image) {
            imageService::deleteImage($donationRequest->image);
        }
        $donationRequest->delete();
        return ApiResponse::sendResponse(
            200,
            'Donation Request deleted successfully',
            []
        );
    }
}
