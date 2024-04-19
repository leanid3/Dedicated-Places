<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Product::class;
    public function definition(): array
    {
        return [
            'category_id' => $this->faker->numberBetween(1, 10),
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph,
            'rating' => $this->faker->randomFloat(1, 0, 5),
            'phone'=>$this->faker->phoneNumber,
            'image' => $this->faker->imageUrl(),
        ];
    }
}
