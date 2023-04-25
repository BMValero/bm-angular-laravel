<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'usuarios_roles');
    }

    public function pedidos(){
        return $this->hasMany(Pedido::class);
    }

    public function token(){
        return $this->hasMany(Token::class);
    }

    public function direccionEntrega(){
        return $this->hasOne(EntregaDireccione::class);
    }

    public function direccionFacturacion(){
        return $this->hasOne(FacturacionDireccione::class);
    }
}
