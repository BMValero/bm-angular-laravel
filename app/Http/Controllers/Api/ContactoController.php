<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\EmailContacto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {

            Mail::to('danielvalerodaw@gmail.com')->send(new EmailContacto($request->nombre,$request->email,$request->telefono,$request->mensaje));
            
        } catch (\Throwable $th) {

            return response()->json(['status' => 'error' , 'message' => $th]);

        }

        return response()->json(['status' => 'ok' , 'message' => 'Email enviado']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
