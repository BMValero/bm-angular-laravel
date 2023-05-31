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
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original White Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido negro con letras en color blanco.';
        $producto->talla = 'M';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original White Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido negro con letras en color blanco.';
        $producto->talla = 'XS';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original White Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido negro con letras en color blanco.';
        $producto->talla = 'L';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original White Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido negro con letras en color blanco.';
        $producto->talla = 'S';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original White Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido negro con letras en color blanco.';
        $producto->talla = 'XL';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original Black Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido blanco con letras en color negro.';
        $producto->talla = 'L';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original Black Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido blanco con letras en color negro.';
        $producto->talla = 'XL';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original Black Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido blanco con letras en color negro.';
        $producto->talla = 'S';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'camisetas';
        $producto->nombre = 'Original Black Tee';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Camiseta de tejido blanco con letras en color negro.';
        $producto->talla = 'XS';
        $producto->precio = 14.99;
        $producto->ruta_imagen = '/assets/BW/camisetas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original White Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'L';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original White Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'S';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original White Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'M';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original White Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'XL';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original White Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'XS';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-White/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original Black Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'L';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original Black Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'S';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-Black/';
        $producto->save();
        
        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original Black Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'M';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original Black Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'XS';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'sudaderas';
        $producto->nombre = 'Original Black Hoodie';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Sudadera de tejido negro con letras en color blanco.';
        $producto->talla = 'XL';
        $producto->precio = 34.99;
        $producto->ruta_imagen = '/assets/BW/sudaderas/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'gorras';
        $producto->nombre = 'Original Black Cap';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Gorra de tejido blanco con letras en color negro.';
        $producto->talla = 'X';
        $producto->precio = 19.99;
        $producto->ruta_imagen = '/assets/BW/gorras/Original-Black/';
        $producto->save();

        $producto = new Producto();
        $producto->tipo = 'gorras';
        $producto->nombre = 'Original White Cap';
        $producto->edicion ='Black & White';
        $producto->descripcion = 'Gorra de tejido blanco con letras en color negro.';
        $producto->talla = 'X';
        $producto->precio = 19.99;
        $producto->ruta_imagen = '/assets/BW/gorras/Original-White/';
        $producto->save();
    }
}
