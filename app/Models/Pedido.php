<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuario;
use App\Models\Producto;

class Pedido extends Model
{
    use HasFactory;

    public function usuario(){
        return $this->belongsTo(Usuario::class);
    }

    public function productos(){
        return $this->hasMany(Producto::class);
    }
}
