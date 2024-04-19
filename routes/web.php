<?php

use App\Http\Controllers\Admin\ProductGRUDController;
use App\Http\Controllers\CartsController;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RenderFormController;
use App\Http\Controllers\searchController;
use App\Http\Controllers\TestformController;
use App\Models\Brend;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/catalog/{id}', [ProductController::class, 'showProduct'])->name('showProduct');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'radioitems' => Brend::pluck('brend')
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/search', [searchController::class, 'search'])->name('search');
Route::get('/answersearch', [searchController::class, 'answersearch'])->name('answersearch');


Route::middleware('auth')->group(function () {
    Route::post('/createformpost', [TestformController::class, 'submitdef'])->name('indexForm');

    Route::get('/cart', [CartsController::class, 'showCart'])->name('cart');
    Route::post('/cart/add', [CartsController::class, 'addCart'])->name('addCart');
    Route::delete('/cart/remove', [CartsController::class, 'destroyCart'])->name('destroyCart');

    Route::post('/catalog/post', [ProductController::class, 'createComment'])->name('comments.product');



    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
