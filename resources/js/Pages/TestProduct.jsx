import React from "react";

export default function TestProduct({ product, comment, auth }) {
    return (
        <div>
            {/* <img src={comment.image} alt="" /> */}
            <img src={product.image} alt="" />
        </div>
    );
}
