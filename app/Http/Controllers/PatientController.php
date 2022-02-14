<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientController extends Controller
{
    public function index()
    {
        $patients = Patient::all()->toArray();
        return array_reverse($patients);
    }
    public function store(Request $request)
    {
        $patient = new Patient([
            'name' => $request->input('name'),
            'species' => $request->input('species'),
            'color' => $request->input('color'),
            'birthday' => $request->input('birthday'),
            'owner' => $request->input('owner')
        ]);
        $patient->save();
        return response()->json('Patient created!');
    }
    public function show($id)
    {
        $patient = Patient::find($id);
        return response()->json($patient);
    }
    public function update($id, Request $request)
    {
        $patient = Patient::find($id);
        $patient->update($request->all());
        return response()->json('Patient updated!');
    }
    public function destroy($id)
    {
        $patient = Patient::find($id);
        $patient->delete();
        return response()->json('Patient deleted!');
    }
}
