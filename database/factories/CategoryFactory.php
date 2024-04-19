<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Category::class;
    public function definition(): array
    {
        return [
            'categoryName'=>fake()->randomElement(['Профессиональные квадрокоптеры', 'Хобби и развлечения', 'Детские квадрокоптеры'. 'Квадрокоптеры для начинающих', 'Квадрокоптеры для съемки', 'Квадрокоптеры для экстремальных видов спорта' ])
        ];
    }
}
