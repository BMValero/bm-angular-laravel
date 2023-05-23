<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Producto::where('pedido_id' , null)->get();

        return $productos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        for ($i=0; $i < $request->cantidad; $i++) { 
            
            $producto = new Producto();
            $producto->tipo = $request->tipo ;
            $producto->edicion = $request->edicion ;
            $producto->nombre = $request->nombre ;
            $producto->descripcion = $request->descripcion ;
            $producto->talla = $request->talla ;
            $producto->precio = $request->precio ;
            $producto->ruta_imagen = $request->rutaImagen ;
            $producto->save();
        }


        return response()->json(['message' => 'Productos añadidos.']);

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
        $producto = Producto::findOrFail($id);

        $producto->delete();

        return response()->json(['message' => 'El producto ha sido eliminado.']);
    }

    public function obtenerProducto(string $nombre){

        $producto = Producto::where('nombre' , $nombre)->where('pedido_id' , null)->get();

        return $producto;

    }
}
