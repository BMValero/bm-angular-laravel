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
        Schema::create('entrega_direcciones', function (Blueprint $table) {

            $table->id('id');
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('telefono');
            $table->string('ciudad');
            $table->string('cp');
            $table->string('direccion');
            //TODO : QUITAR NULLABLE DE USUARIO_ID CUANDO LA APP SE VAYA A LANZAR
            $table->unsignedBigInteger('usuario_id')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('direcciones-entrega');
    }
};
