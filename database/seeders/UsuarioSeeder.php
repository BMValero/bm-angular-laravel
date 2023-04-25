<?php

namespace Database\Seeders;

use App\Models\EntregaDireccione;
use App\Models\FacturacionDireccione;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use App\Models\Role;
use Illuminate\Support\Str;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario = new Usuario();
        $usuario->nombre = "Daniel";
        $usuario->apellidos = "Valero Peña";
        $usuario->password = bcrypt("1212");
        $usuario->email = "dani@email.com";
        $usuario->telefono = "444312314";
        $usuario->direccion_entrega_id = 1;
        $usuario->direccion_facturacion_id = 1;
        $usuario->save();
        
        $role = Role::find(1);

        $usuario->roles()->attach($role);

        $entrega_direccion = EntregaDireccione::find(1);

        $usuario->direccionEntrega()->save($entrega_direccion);

        $facturacion_direccion = FacturacionDireccione::find(1);

        $usuario->direccionFacturacion()->save($facturacion_direccion);

        $usuario = new Usuario();
        $usuario->nombre = "María";
        $usuario->apellidos = "Rodríguez García";
        $usuario->password = bcrypt("2323");
        $usuario->email = "maría@email.com";
        $usuario->telefono = "555545635";
        $usuario->direccion_entrega_id = 2;
        $usuario->direccion_facturacion_id = 2;
        $usuario->save();

        $role = Role::find(2);

        $usuario->roles()->attach($role);

        $entrega_direccion = EntregaDireccione::find(2);

        $usuario->direccionEntrega()->save($entrega_direccion);

        $facturacion_direccion = FacturacionDireccione::find(2);

        $usuario->direccionFacturacion()->save($facturacion_direccion);

        $usuario = new Usuario();
        $usuario->nombre = "Juan";
        $usuario->apellidos = "Pérez Sánchez";
        $usuario->password = bcrypt("3434");
        $usuario->email = "juan.perez@gmail.com";
        $usuario->telefono = "666123456";
        $usuario->direccion_entrega_id = 3;
        $usuario->direccion_facturacion_id = 3;
        $usuario->save();

        $role = Role::find(2);

        $usuario->roles()->attach($role);

        $entrega_direccion = EntregaDireccione::find(3);

        $usuario->direccionEntrega()->save($entrega_direccion);

        $facturacion_direccion = FacturacionDireccione::find(3);

        $usuario->direccionFacturacion()->save($facturacion_direccion);
    }
}