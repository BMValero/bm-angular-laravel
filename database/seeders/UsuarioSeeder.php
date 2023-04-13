<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use Illuminate\Support\Str;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario = new Usuario();
        $usuario->id = Str::uuid();
        $usuario->nombre = "Daniel";
        $usuario->apellidos = "Valero Peña";
        $usuario->ciudad = "Benidorm";
        $usuario->cp = "23123";
        $usuario->direccion_entrega = "Calle falsa 123";
        $usuario->direccion_facturacion = "Calle falsa 123";
        $usuario->password = bcrypt("1212");
        $usuario->email = "dani@email.com";
        $usuario->telefono = "444312314";
        $usuario->save();

        $usuario = new Usuario();
        $usuario->id = Str::uuid();
        $usuario->nombre = "María";
        $usuario->apellidos = "Rodríguez García";
        $usuario->ciudad = "Madrid";
        $usuario->cp = "44543";
        $usuario->direccion_entrega = "Calle asdasd 23434";
        $usuario->direccion_facturacion = "Calle asdasd 23434";
        $usuario->password = bcrypt("2323");
        $usuario->email = "maría@email.com";
        $usuario->telefono = "555545635";
        $usuario->save();
    }
}