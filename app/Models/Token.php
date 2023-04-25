<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuario;

class Token extends Model
{
    use HasFactory;

    public function usuario(){
        return $this->belongsTo(Usuario::class);
    }
}
