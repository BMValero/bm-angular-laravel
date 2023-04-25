<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Token;
use App\Models\Usuario;
use Illuminate\Http\Request;
use App\Models\Pedido;

class PedidosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pedidos = Pedido::with(['productos'])->get();
        return $pedidos;
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
    public function show(string $token)
    {

        $token = Token::where('id' , $token)->first();

        $usuario = Usuario::with(['pedidos.productos'])->where('id', $token->usuario_id)->first();

        return $usuario->pedidos;
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

    public function fichaPedido(string $id){

        $pedido =  Pedido::where('id' , $id)->first();

        return $pedido;

    }
}
