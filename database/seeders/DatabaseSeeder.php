<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use App\Models\Brend;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        Brend::factory(10)->create();
        Category::factory(10)->create();
        Product::factory(100)->create();
        Admin::factory(1)->create([
            'name' => 'Admin',
            'email' => 'garavil1313@gmail.com',
            'password' => bcrypt('Ravil1313'),
        ]);
    }
}
