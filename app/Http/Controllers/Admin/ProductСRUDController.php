<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Brend;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductСRUDController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Product $product)
    {
        return Inertia::render('Admin/GRUDPoduct', [
            'products' => $product->with('category')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreatePost', [
            'categories' => Category::select('categoryName', 'id')->get(),
            'status' => ['в наличии', 'нет в наличии'],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {

        $request->validated();

        $image = $request->file('postImage')->store('productImage', 'public');

        Product::create([
            'category_id' => $request->postCategory,
            'title' => $request->postTitle,
            'description' => $request->postDescription,
            'rating' => $request->postRating,
            'phone' => $request->postPhone,
            'address' => $request->postAddress,
            'site' => $request->postSite,
            'image' =>  '/storage/' . $image
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, $id)
    {

        $product->delete($id);
        return Redirect::back();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $hasProduct = Product::with('category')->findOrFail($id);

        $categories = Category::select('categoryName', 'id')->get();

        return Inertia::render('Admin/UpdatePost', [
            'product' => $hasProduct,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $product, )
    {
        $product->validated();

        if ($product->hasFile('postImage')) {
            $imagePath =  $product->file('postImage')->store('productImage', 'public');
            if ($product->image) {
                Storage::delete($product->image);
            }
            $product->image = $imagePath;
        };
        dd($product->exists);
        $product->update([
            'title' => $request->postTitle,
            'category_id' => $request->postCategory,
            'description' => $request->postDescription,
            'rating' => $request->postRating,
            'image' => '/' . $imagePath,
        ]);

        return Redirect::route('adminMainPage');
//        dd($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, Request $productRequest)
    {
       $item = $product->find($productRequest->input('product_id'));
        $item->delete();
        return Redirect::back();
    }
}
