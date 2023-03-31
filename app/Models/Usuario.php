<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Role;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'email',
        'password',
        'telefono',
        'direccion_entrega',
        'direccion_facturacion'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'usuarios_roles');
    }
}
