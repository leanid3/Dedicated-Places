<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use App\Models\Product;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartsController extends Controller
{
    public function showCart()
    {
        $id = Auth::user()->id;
        
        $cart = Carts::where('user_id', $id)
        ->with('product')
        ->get();

        return Inertia::render('Cart', [
            'cart' => $cart,
        ]);
    }

    public function addCart(Request $request)
    {
        $request->validate([
            'product_id' => ['required', 'exists:products,id'],
        ]);
        
        $userId = Auth::user()->id;
        $productId = $request->product_id;

        $cartItem = Carts::where('user_id', $userId)->where('product_id', $productId)->first();

        if ($cartItem) {
            $cartItem->quantity++;
            $cartItem->save();
        }else{
            $cartItem = new Carts([
                'user_id' => $userId,
                'product_id' => $productId,
                'quantity' => 1
            ]);
            $cartItem->save();
        }
    }    

    public function destroyCart(Request $request){

        $cartItem = Carts::find($request->input('item_id'));

        $cartItem->delete();
    }
    //* играл с сессиями и response json
    // public function addCart(Request $request)
    // {
    //     $productID = $request->productId;

    //     $product = Product::find($productID);

    //     // if (!$product) {
    //     //     return response()->json(['addError' => 'ошибка при добавлении в корзину'], 404);
    //     // }

    //     $cart = session()->get('cart', []);

    //     if (isset($cart[$productID])) {
    //         $cart[$productID]['quantity']++;
    //     } else {
    //         $cart[$productID] = [
    //             'product_id' => $product->,
    //             'user_id' => $product->name,
    //             'quantity' => 1
    //         ];
    //     }
    //     session()->put('cart', $cart);

    //     return Inertia::render('Mainpage');
    //     // return response()->json(['addSuccess'=>'добалвенно в корзину'], 200) ;
    // }
}
