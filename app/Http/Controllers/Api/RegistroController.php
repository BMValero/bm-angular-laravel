<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegistroController extends Controller
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
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|max:255',
            'apellidos' => 'required|max:255',
            'ciudad' => 'required|max:255',
            'cp' => 'required|size:5',
            'direccion' => 'required|max:255',
            'telefono' => 'required|size:9',
            'email' => 'required|unique:usuarios,email|max:255',
            'password' => 'required|max:255',
        ]);
    
        if ($validator->fails()) {

            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ]);

        } else {

            $uuid = Str::uuid();

            $existingUuid = Usuario::where('id', $uuid)->exists();
            while ($existingUuid) {
                $uuid = Str::uuid();
                $existingUuid = Usuario::where('id', $uuid)->exists();
            }

            $usuario = new Usuario;
            $usuario->id = $uuid;
            $usuario->nombre = $request->input('nombre');
            $usuario->apellidos = $request->input('apellidos');
            $usuario->ciudad = $request->input('ciudad');
            $usuario->cp = $request->input('cp');
            $usuario->direccion_entrega = $request->input('direccion');
            $usuario->direccion_facturacion = $request->input('direccion');
            $usuario->telefono = $request->input('telefono');
            $usuario->email = $request->input('email');
            $usuario->password = bcrypt($request->input('password'));
        
            $usuario->save();

            return response()->json( ['status' => 'ok','msg' => 'Usuario creado.']);
        }
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
