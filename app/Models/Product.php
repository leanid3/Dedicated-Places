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
      "description",
      "rating",
      "image",
       "phone",
       "site",
       "address",
   ];

   public function category()
   {
      return $this->belongsTo(Category::class);
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
