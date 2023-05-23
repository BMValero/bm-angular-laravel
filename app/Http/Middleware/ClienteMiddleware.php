<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Usuario;
use App\Models\Token;

class ClienteMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->header('Authorization');

        if (!$token) {
            return response()->json(['error' => 'Token no proporcionado']);
        }

        $token = Token::where('id' , $token)->first();

        if(!$token){
            return response()->json(['error' => 'Token no válido']);
        }

        $usuario = Usuario::with(['roles'])->where('id', $token->usuario_id)->first();

        $rolUsuario = $usuario->roles()->where('usuario_id' , $usuario->id)->first();

        if($rolUsuario->tipo == "cliente" || $rolUsuario->tipo == "administrador"){

            return $next($request);

        } else {

            return response()->json(['error' => 'El usuario no es cliente']);
        }
    }
}
