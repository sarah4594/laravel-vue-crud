<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Owner;
use App\Models\Patient;

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
        return response()->json($owner);
    }
    public function show($id)
    {
        $owner = Owner::find($id);
        $patients = Patient::all()->where('owner_id', $id);
        return response()->json(['owner'=>$owner, 'patients'=>$patients]);
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
        $patients = Patient::all()->where('owner_id', $id);
        foreach ($patients as &$patient) {
            $patient->delete();
        }
        $owner->delete();

        return response()->json('Owner deleted!');
    }
}
