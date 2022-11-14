<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function add_product(Request $request) {

        $product = new Product();

        $product->name = $request->name;
        $product->description = $request->description;

    }
}
