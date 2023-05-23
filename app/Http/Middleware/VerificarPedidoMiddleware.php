<?php

namespace App\Http\Middleware;

use App\Models\Token;
use App\Models\Usuario;
use App\Models\Pedido;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerificarPedidoMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->header('Authorization');

        $token = Token::where('id' , $token)->first();

        $usuario = Usuario::with('roles')->where('id' , $token->usuario_id)->first();

        $idPedido = $request->segment(4);

        $pedido = Pedido::where('id' , $idPedido)->first();

        if(!$pedido){
            return response()->json(['error' => 'El pedido no existe']);
        }

        if($usuario->roles[0]->tipo == "administrador"){

            return $next($request);

        }

        if($pedido->usuario_id != $usuario->id){
            return response()->json(['error' => 'El pedido no pertenece a este cliente']);
        }

        return $next($request);
    }
}
