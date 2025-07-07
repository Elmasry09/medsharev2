<?php

namespace App\Http\Controllers\charities;

use Inertia\Inertia;
use App\Models\donation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DonationController extends Controller
{
    
    
    public function edit(donation $donation)
    {
        $donation->load(['images','address','city','charity','user']);
        // dd($donation);
        return Inertia::render('charities/DonationManagement/edit',[
            'donation'=>$donation
        ]);
    }

    public function update(Request $request,donation $donation)
    {
        $validatedData = $request->validate([
            'state' => 'required|in:accepted,pending,approved'
        ]);
        $validatedData['charit_id'] = auth()->user()->id;
        $donation->update($validatedData);
        return back();
    }

}
