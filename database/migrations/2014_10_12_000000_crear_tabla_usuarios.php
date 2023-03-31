<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {

            $table->uuid('id')->primary();
            $table->string('nombre');
            $table->string('password');
            $table->string('email')->unique();
            $table->integer('telefono');
            $table->string('direccion_entrega')->nullable();
            $table->string('direccion_facturacion')->nullable();
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
