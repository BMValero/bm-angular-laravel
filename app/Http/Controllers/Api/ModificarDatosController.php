<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Token;
use App\Models\Usuario;
use Illuminate\Http\Request;

class ModificarDatosController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $token = Token::where('id' , $id)->first();

        $usuario = Usuario::with(['direccionEntrega','direccionFacturacion'])->where('id' , $token->usuario_id)->first();

        $direccion_entrega  = [
            "nombre" =>$usuario->direccionEntrega->nombre,
            "apellidos" =>$usuario->direccionEntrega->apellidos,
            "telefono" =>$usuario->direccionEntrega->telefono,
            "ciudad" =>$usuario->direccionEntrega->ciudad,
            "cp" =>$usuario->direccionEntrega->cp,
            "direccion" =>$usuario->direccionEntrega->direccion,
        ];

        $direccion_facturacion  = [
            "nombre" =>$usuario->direccionFacturacion->nombre,
            "apellidos" =>$usuario->direccionFacturacion->apellidos,
            "telefono" =>$usuario->direccionFacturacion->telefono,
            "ciudad" =>$usuario->direccionFacturacion->ciudad,
            "cp" =>$usuario->direccionFacturacion->cp,
            "direccion" =>$usuario->direccionFacturacion->direccion,
        ];

        $usuarioRespuesta = [
            'nombre' => $usuario->nombre,
            'apellidos' => $usuario->apellidos,
            'email' => $usuario->email,
            'telefono' => $usuario->telefono,
            'direccion_entrega' => $direccion_entrega,
            'direccion_facturacion' => $direccion_facturacion
        ];

        return $usuarioRespuesta;
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
