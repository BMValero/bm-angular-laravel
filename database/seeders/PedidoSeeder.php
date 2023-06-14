<?php

namespace Database\Seeders;

use App\Models\Producto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pedido;
use Carbon\Carbon;

class PedidoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $pedido = new Pedido();
        $pedido->fecha = Carbon::now();
        $pedido->direccion_entrega = 'Calle falsa 123';
        $pedido->direccion_facturacion = 'Calle falsa 123';
        $pedido->coste_total = 29.98;
        $pedido->usuario_id = 2;
        $pedido->save();

        $pedido = new Pedido();
        $pedido->fecha = Carbon::now();
        $pedido->direccion_entrega = 'Calle falsa 3456';
        $pedido->direccion_facturacion = 'Calle falsa 3456';
        $pedido->coste_total = 49.98;
        $pedido->usuario_id = 2;
        $pedido->save();
        
    }
}
