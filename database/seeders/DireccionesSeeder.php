<?php

namespace Database\Seeders;

use App\Models\EntregaDireccione;
use App\Models\FacturacionDireccione;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DireccionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $entrega = new EntregaDireccione();
        $entrega->nombre = "No Daniel";
        $entrega->Apellidos = "No apellidos Daniel";
        $entrega->ciudad = "Benidorm";
        $entrega->cp = "23123";
        $entrega->direccion = "Calle Falsa 123";
        $entrega->telefono = "999999999";
        $entrega->save();

        $facturacion = new FacturacionDireccione();
        $facturacion->nombre = "Dans";
        $facturacion->Apellidos = "SL";
        $facturacion->ciudad = "Alicante";
        $facturacion->cp = "45678";
        $facturacion->direccion = "Calle 678";
        $facturacion->telefono = "688753241";
        $facturacion->save();

        $entrega = new EntregaDireccione();
        $entrega->nombre = "No María";
        $entrega->Apellidos = "No apellidos María";
        $entrega->ciudad = "Madrid";
        $entrega->cp = "74553";
        $entrega->direccion = "Calle Falsa 4521";
        $entrega->telefono = "452123123";
        $entrega->save();

        $facturacion = new FacturacionDireccione();
        $facturacion->nombre = "María";
        $facturacion->Apellidos = "SL";
        $facturacion->ciudad = "Toledo";
        $facturacion->cp = "78534";
        $facturacion->direccion = "Calle 111";
        $facturacion->telefono = "000000000";
        $facturacion->save();

        $entrega = new EntregaDireccione();
        $entrega->nombre = "No Juan";
        $entrega->Apellidos = "No apellidos Juan";
        $entrega->ciudad = "Barcelona";
        $entrega->cp = "32123";
        $entrega->direccion = "Calle Rosellón, 123";
        $entrega->telefono = "666123456";
        $entrega->save();

        $facturacion = new FacturacionDireccione();
        $facturacion->nombre = "Juan";
        $facturacion->Apellidos = "SL";
        $facturacion->ciudad = "Tarragona";
        $facturacion->cp = "08001";
        $facturacion->direccion = "Calle Provenza, 456";
        $facturacion->telefono = "776658732";
        $facturacion->save();
    }
}
