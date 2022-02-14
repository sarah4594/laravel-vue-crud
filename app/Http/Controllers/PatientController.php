<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Patient;
use App\Models\Owner;

class PatientController extends Controller
{
    public function index()
    {
        $patients = DB::table('patients')->join('owners', 'patients.owner_id', '=', 'owners.id')->select('patients.*', 'owners.*')->get()->toArray();
        return array_reverse($patients);
    }
    public function store(Request $request)
    {
        $patient = new Patient([
            'name' => $request->input('name'),
            'species' => $request->input('species'),
            'color' => $request->input('color'),
            'birthday' => $request->input('birthday'),
            'owner_id' => $request->input('owner_id')
        ]);
        $patient->save();
        return response()->json($patient);
    }
    public function show($id)
    {
        $patient = Patient::find($id);
        $owner = Owner::find($patient->owner_id);
        return response()->json(['patient'=>$patient, 'owner'=>$owner]);
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
