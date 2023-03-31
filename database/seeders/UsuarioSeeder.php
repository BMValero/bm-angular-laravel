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
        $usuario->password = bcrypt("1212");
        $usuario->email = "dani@email.com";
        $usuario->telefono = "4444";
        $usuario->save();

        $usuario = new Usuario();
        $usuario->id = Str::uuid();
        $usuario->nombre = "María";
        $usuario->password = bcrypt("2323");
        $usuario->email = "maría@email.com";
        $usuario->telefono = "55555";
        $usuario->save();
    }
}