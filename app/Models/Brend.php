<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brend extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'brend'
    ];
    public function product()
    {
        return $this->hasMany(Product::class);
    }
}
