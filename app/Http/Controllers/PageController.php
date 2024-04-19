<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Testform;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use function Termwind\render;

class PageController extends Controller
{


    public function home(Product $product)
    {

        $arrayProduct = $product->with('brend')->paginate(10);
        return Inertia::render(
            'Mainpage',
            [
                'arrayProduct' => $arrayProduct,
            ]
        );
    }
    public function cart()
    {
        return Inertia::render('Cart');
    }
}
