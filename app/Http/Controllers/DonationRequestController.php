<?php

namespace App\Http\Controllers;

use App\Models\DonationRequest;
use Illuminate\Http\Request;

class DonationRequestController extends Controller
{
    public function edit(DonationRequest $donationRequest)
    {
        $donationRequest->load(['user','address']);
        return inertia('charities/DonationManagement/DonationRequestEdit', [
            'donation' => $donationRequest
        ]);
    }

    public function update(Request $request, DonationRequest $donationRequest)
    {
        // dd($request->all());
        $validatedData = $request->validate([
            'state' => 'required|in:accepted,pending,approved'
        ]);
        $validatedData['charity_id'] = auth()->user()->id;
        $donationRequest->update($validatedData);
        return back()->with('success', 'Donation Request updated successfully');
    }
}
