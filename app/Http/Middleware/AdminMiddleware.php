<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Usuario;
use App\Models\Token;
use App\Models\Role;
use PhpParser\Node\Stmt\TryCatch;

class AdminMiddleware
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

        $rolUsuario = $usuario->roles()->where('usuario_id' , $usuario->id)->where('tipo' , 'administrador')->first();

        if(!$rolUsuario){
            return response()->json(['error' => 'El usuario no es admin']);
        }


        return $next($request);
    }
}
