<?php

namespace Database\Factories;

use App\Models\Brend;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Brend>
 */
class BrendFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Brend::class;
    public function definition(): array
    {
        return [
            'brend' => $this->faker->randomElement(['DJI', 'Parrot', 'Syma', 'Holy Stone'])
        ];
    }
}
