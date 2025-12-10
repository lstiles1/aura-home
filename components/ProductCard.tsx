
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group flex flex-col gap-6 cursor-pointer transition-all duration-500 hover:-translate-y-2" 
      onClick={() => onClick(product)}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EBE7DE] shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
        />
        
        {/* Hover overlay with "Quick View" */}
        <div className="absolute inset-0 bg-[#2C2A26]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-[#F5F2EB] text-[#2C2A26] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-white">
                    View Object
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-center px-4">
        <h3 className="text-2xl font-serif font-medium text-[#2C2A26] mb-2 group-hover:text-[#5D5A53] transition-colors">{product.name}</h3>
        <p className="text-sm font-light text-[#5D5A53] mb-3 tracking-wide">{product.category}</p>
        <span className="text-sm font-medium text-[#2C2A26] block opacity-80">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
