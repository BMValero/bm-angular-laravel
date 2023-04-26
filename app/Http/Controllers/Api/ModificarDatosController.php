<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EntregaDireccione;
use App\Models\FacturacionDireccione;
use App\Models\Token;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
    public function update(Request $request, string $token)
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

    public function modificarDatos(Request $request, string $token){

        $token = Token::where('id' , $token)->first();

        
        if($request->tipoModificacion == "acceso"){

            $usuario = Usuario::where('id', $token->usuario_id)->first();

            if(Hash::check($request->input('passwordCliente'), $usuario->password)){

                $usuario->email = $request->input("email");
                $usuario->telefono = $request->input("telefono");

                if($request->input("passwordNueva") != ""){

                    $usuario->password = bcrypt($request->input("passwordNueva"));

                }

                $usuario->save();

                return response()->json(['message' => 'Registro actualizado correctamente']);

            } else {

                return response()->json(['error' => "La contraseña introducida no es correcta."]);

            }

            
        }

        if($request->tipoModificacion == "entrega"){

            $direccionEntregaUsuario = EntregaDireccione::where('usuario_id' , $token->usuario_id)->first();
            $direccionEntregaUsuario->nombre = $request->input("nombre");
            $direccionEntregaUsuario->apellidos = $request->input("apellidos");
            $direccionEntregaUsuario->telefono = $request->input("telefono");
            $direccionEntregaUsuario->ciudad = $request->input("ciudad");
            $direccionEntregaUsuario->cp = $request->input("cp");
            $direccionEntregaUsuario->direccion = $request->input("direccion");
            $direccionEntregaUsuario->save();

            return response()->json(['message' => 'Registro actualizado correctamente']);
            
        }

        if($request->input("tipoModificacion") == "facturacion"){

            $direccionFacturacionUsuario = FacturacionDireccione::where('usuario_id' , $token->usuario_id)->first();

            $direccionFacturacionUsuario->nombre = $request->input("nombre");
            $direccionFacturacionUsuario->apellidos = $request->input("apellidos");
            $direccionFacturacionUsuario->telefono = $request->input("telefono");
            $direccionFacturacionUsuario->ciudad = $request->input("ciudad");
            $direccionFacturacionUsuario->cp = $request->input("cp");
            $direccionFacturacionUsuario->direccion = $request->input("direccion");
            $direccionFacturacionUsuario->save();

            return response()->json(['message' => 'Registro actualizado correctamente']);
        }

        return response()->json(['error' => "No se ha realizado ninguna modificacion."]);

    }
}
