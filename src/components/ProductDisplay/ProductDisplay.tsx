import React from 'react';
import type { ProductCardProps } from '../types/index.ts';

export const ProductDisplay: React.FC<ProductCardProps> = ({
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children,
}) => {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 max-w-sm">
        {product.imageUrl && (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-5">
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
            <span className="text-lg font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </span>
          </div>
  
          {showDescription && (
            <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
          )}
  
          {showStockStatus && (
            <div className="mt-3">
              <span
                className={`px-2 py-1 text-xs font-bold rounded ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          )}
  
          {children && <div className="mt-4 text-sm text-gray-500">{children}</div>}
  
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product.id)}
              disabled={!product.inStock}
              className={`mt-4 w-full py-2 px-4 rounded font-bold text-white transition duration-200 ${
                product.inStock
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Unavailable'}
            </button>
          )}
        </div>
      </div>  
    );
};