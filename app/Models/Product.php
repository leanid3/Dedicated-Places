<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   use HasFactory;
   protected  $fillable  = [
      'category_id',
      "title",
       "phone",
      "description",
      "rating",
      "image"
   ];

   public function category()
   {
      return $this->belongsTo(Category::class);
   }

   public function brend()
   {
      return $this->belongsTo(Brend::class);
   }

   public function productFeatures()
   {
      return $this->hasMany(ProductFeatures::class);
   }

   public function comments()
   {
      return $this->hasMany(Comments::class)->orderBy('created_at');
   }

   public function carts()
   {
      return $this->hasMany(Carts::class);
   }
}
