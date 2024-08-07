<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminStoreRequest;
use App\Http\Requests\AdminUpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\admin;
use Inertia\Inertia;

class AdminController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admins/SystemUsers/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AdminStoreRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData ['password'] = Hash::make($request->password);
        $admin = admin::create($validatedData);
        return back()->with('success', 'Admin created successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(admin $admin)
    {
        return Inertia::render('admins/SystemUsers/edit',[
            'admin'=>$admin
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AdminUpdateRequest $request, admin $admin)
    {
        $validatedData = $request->validated();
        $admin->update($validatedData);
        return back()->with('success', 'Admin updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(admin $admin)
    {
        $admin->delete();
        return to_route('admins.systemUsers')->with('success', 'Admin deleted successfully');
    }

}
