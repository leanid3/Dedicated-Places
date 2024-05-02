<?php


namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Brend;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        Category::factory(4)->create();
        Product::factory(100)->create();
        Admin::factory(1)->create([
            'name' => 'Admin',
            'email' => 'garavil1313@gmail.com',
            'password' => bcrypt('Ravil1313'),
        ]);
    }
}
