<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller
{
    public function login(){
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'role'=>'admin']);
    }
    public function login_proccess(Request $request){
      $data = $request->validate([
        'email' => ['required', 'exists:admins,email'],
        'password' => ['required'],
      ]);

      if (auth()->guard('admin')->attempt($data)){
        return Redirect::route('adminMainPage');
    }

    }

}
