<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EntregaDireccione;
use App\Models\FacturacionDireccione;
use App\Models\Token;
use App\Models\Usuario;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Models\Producto;

class PedidosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pedidos = Pedido::with(['productos', 'usuario'])->get();

        return $pedidos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $token = Token::where('id' , $request->input('token_usuario'))->first();

        $usuario = Usuario::where('id' , $token->usuario_id)->first();

        $pedido = new Pedido();
        $pedido->fecha = Carbon::now();
        $pedido->direccion_entrega = "";
        $pedido->direccion_facturacion = "";
        $pedido->coste_total = $request->input('coste_total');
        $pedido->usuario_id = $usuario->id;
        $pedido->save();

        $arrayProductos = explode("," , $request->input('productos'));

        $arrayProductosPedido = [];

        for ($i=0; $i < count($arrayProductos); $i++) {

            $nombreYTallaProducto = explode(">",$arrayProductos[$i]);
            
            $producto = Producto::where('nombre' , $nombreYTallaProducto[0])->where('talla' , $nombreYTallaProducto[1])->where('pedido_id' , null)->first();

            if($producto == null){

                for($i=0; $i < count($arrayProductosPedido); $i++) {

                    $arrayProductosPedido[$i]->pedido_id = null;
                    $arrayProductosPedido[$i]->save();

                }

                $pedido->delete();
                return response()->json(['status' => 'error' , 'producto' => $nombreYTallaProducto[0]]);
            }

            $producto->pedido_id = $pedido->id;
            $producto->save();

            $pedido->productos()->save($producto);

            $arrayProductosPedido[] = $producto;

        }

        return response()->json(['status' => 'ok' , 'pedido_id' => $pedido->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $token)
    {

        $token = Token::where('id' , $token)->first();

        $usuario = Usuario::with(['pedidos.productos'])->where('id', $token->usuario_id)->first();

        return $usuario;
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

        $pedido =  Pedido::with(['productos'])->where('id' , $id)->first();
        $usuario = Usuario::where('id' , $pedido->usuario_id)->first();
        $direccionEntrega = EntregaDireccione::where('usuario_id' , $usuario->id)->first();
        $direccionFacturacion = FacturacionDireccione::where('usuario_id' , $usuario->id)->first();

        

        return response()->json(['usuario' => $usuario , 'pedido' => $pedido , 'direccion_entrega' => $direccionEntrega , 'direccion_facturacion' => $direccionFacturacion]);
    }
}
