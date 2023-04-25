<?php

namespace App\Http\Middleware;

use App\Models\Token;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerificarPertenenciaDatosMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $idTokenAutorizacion = $request->header('Authorization');

        $tokenAutorizacion = Token::where('id' , $idTokenAutorizacion)->first();

        $idTokenPeticion = $request->segment(4);

        $tokenPeticion = Token::where('id' , $idTokenPeticion)->first();

        if(!$tokenPeticion){
            return response()->json(['error' => 'Esta ruta no existe']);
        }

        if($tokenAutorizacion->usuario_id != $tokenPeticion->usuario_id) {
            return response()->json(['error' => 'Estos datos no pertenecen a este cliente']);
        } 
    
        return $next($request);
    }
}
