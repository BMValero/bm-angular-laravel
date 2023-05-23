<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Producto;
use Ramsey\Uuid\Uuid;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $producto = new Producto();
        $producto->tipo = 'camiseta';
        $producto->nombre = 'Original White';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido negro con letras en color blanco.';
        $producto->talla = 'M';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/imagenes/BW/camisetas/Original-White/';
        $producto->pedido_id = 1;
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camiseta';
        $producto->nombre = 'Original Black';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido blanco con letras en color negro.';
        $producto->talla = 'L';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/imagenes/BW/camisetas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudadera';
        $producto->nombre = 'Modern White';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'L';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/imagenes/BW/sudaderas/Modern-White/';
        $producto->pedido_id = 2;
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'gorra';
        $producto->nombre = 'Urban Black';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Gorra de tejido blanco con letras en color negro.';
        $producto->talla = 'X';
        $producto->precio = 19.99;
        $producto->ruta_imagen = '/imagenes/BW/gorras/Urban-Black/';
        $producto->save();
    }
}
