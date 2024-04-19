<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductFeatures extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillblade = [
        'product_id',
        'videoTransmission',
        'battery',
        'receiverProtocol',
        'sizePropellers',
        'frameSize',
        'powerConnector',
        'FPV',
        'version',
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
