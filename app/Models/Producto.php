<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pedido;

class Producto extends Model
{
    use HasFactory;

    public function pedido(){
        return $this->belongsTo(Pedido::class);
    }
}
