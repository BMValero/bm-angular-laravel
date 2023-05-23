<?php

use App\Http\Controllers\Api\ContactoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\RegistroController;
use App\Http\Controllers\Api\PedidosController;
use App\Http\Controllers\Api\ProductosController;
use App\Http\Controllers\Api\ModificarDatosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('login', LoginController::class);
Route::apiResource('registro', RegistroController::class);
Route::controller(PedidosController::class)->group(function(){
    Route::get('/pedidos' , 'index')->middleware('verificar-admin');
    Route::get('/pedidos/{token}' , 'show')->middleware('verificar-cliente','verificar-pertenencia-pedidos-cliente');
    Route::get('/pedidos/pedido/{id}' , 'fichaPedido')->middleware('verificar-cliente', 'verificar-pedido-cliente');
    Route::post('/pedidos/realizar' , 'store')->middleware('verificar-cliente');
});
Route::controller(ModificarDatosController::class)->group(function(){
    Route::get('/datos/usuarios' ,'index')->middleware('verificar-admin');
    Route::get('/datos/usuarios/{token}' , 'show')->middleware('verificar-cliente','verificar-pertenencia-datos-cliente');
    Route::put('/datos/usuarios/modificar' , 'update')->middleware('verificar-admin');
    Route::put('/datos/usuarios/modificar/{token}', 'modificarDatos')->middleware('verificar-cliente' , 'verificar-pertenencia-modificar-datos-cliente');
});
Route::controller(ProductosController::class)->group(function(){
    Route::get('/productos' ,'index');
    Route::get('productos/{nombre}' , 'obtenerProducto');
    Route::post('/productos' ,'store')->middleware('verificar-admin');
    Route::delete('/productos/{id}' ,'destroy')->middleware('verificar-admin');
});
Route::controller(ContactoController::class)->group(function(){
    Route::post('/contacto', 'store');
});