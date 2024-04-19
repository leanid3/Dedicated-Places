<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductСRUDController;
Route::prefix('admin')->group(function(){

    Route::get('login', [AuthController::class, 'login']  );
    Route::post('login', [AuthController::class, 'login_proccess'] )->name('loginAdmin');

    Route::middleware('auth:admin')->group(function(){
        Route::get('/', [AdminController::class, 'index'])->name('adminMainPage');
        Route::resource('product', ProductСRUDController::class);
        Route::post('product/patch', [ProductСRUDController::class, 'update'])->name('productUpdate');
        Route::get('/product/{id}/edit', [ProductСRUDController::class, 'edit'])->name('product.edit');
        Route::post('/product/destroy', [ProductСRUDController::class, 'destroy'])->name('product.destroy');
    });
});



// Route::middleware('auth:admin')->group(function(){

//     Route::resource('/admin', AdminController::class)->('adminpanel');
// });
