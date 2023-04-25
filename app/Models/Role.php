<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuario;

class Role extends Model
{
    use HasFactory;

    public function usuario()
    {
        return $this->belongsToMany(Usuario::class, 'usuarios_roles');
    }
}
