<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Owner;

class OwnerController extends Controller
{
    public function index()
    {
        $owners = Owner::all()->toArray();
        return array_reverse($owners);
    }
    public function store(Request $request)
    {
        $owner = new Owner([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'phone_number' => $request->input('phone_number')
        ]);
        $owner->save();
        return response()->json('Owner created!');
    }
    public function show($id)
    {
        $owner = Owner::find($id);
        return response()->json($owner);
    }
    public function update($id, Request $request)
    {
        $owner = Owner::find($id);
        $owner->update($request->all());
        return response()->json('Owner updated!');
    }
    public function destroy($id)
    {
        $owner = Owner::find($id);
        $owner->delete();
        return response()->json('Owner deleted!');
    }
}
