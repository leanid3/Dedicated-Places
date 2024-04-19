import React from 'react';

function StarOut({rating, title}) {

    const maxRating = 5

    const roundedRating = Math.round(rating)

    const stars = Array.from({ length: maxRating }, (_, index) => {
        const filled = index + 1 <= roundedRating; // Определяем, заполнена ли звёздочка
        return filled ? '★' : '☆'; // Используем звёздочки Unicode
    });
    return (
        <div className='flex flex-col'>
            <div className="flex">
                {stars.map((star, index) => (
                    <span key={index} className="text-yellow-400 text-2xl">
              {star}
            </span>
                ))}
            </div>
            <p className='text-sm text-gray-500 text-nowrap'>{title}</p>
        </div>
    );
}

export default StarOut;
