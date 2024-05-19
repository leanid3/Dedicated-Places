<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Feedback;
use App\Models\Product;
use App\Models\Testform;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use function Termwind\render;

class PageController extends Controller
{


//    public function home(Product $product)
//    {
//        $arrayProduct = $product->get();
//        $category = Category::all();
//
//        return Inertia::render(
//            'Mainpage',
//            [
//                'arrayProduct' => $arrayProduct,
//                'categories' => $category,
//            ]
//        );
//    }
    public function home(Request $request)
    {
//        dd($request);
        $query = Product::query();
        if ($request->has('category')) {
            $query->where('category_id', $request->category);
        }
        $products = $query->paginate(10);

        $categories = Category::all();

        $categoryToShow = $request->category ?? null;

        return Inertia::render('Mainpage', [
            'arrayProduct' => $products,
            'categories' => $categoryToShow,
            'showCategories' => $categories,
        ]);
    }
    public function  feedback()
    {
        return inertia::render("Feedback");
    }
    public  function feedbackPost(Request $request){
       $message =  $request->validate([
            'email' => ['required', 'email'],
            'param' => ['required'],
            'description' => ['required', 'min:3'],
        ]);
        Feedback::create($message);
        return Redirect::back();
    }
    public function cart()
    {
        return Inertia::render('Cart');
    }
}
