'use client'

import React, { useState } from 'react'
import { ProductType } from './types'
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType
  selectedSize: string
  selectedColor: string
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [quantity, setQuantity] = useState(1)

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set(type, value)

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }

  const handleQuantityChange = (type: 'inc' | 'dcr') => {
    if (type === 'inc') {
      setQuantity((prev) => prev + 1)
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }
  }

  return (
    <div className="mt-4 flex flex-col gap-6">
      {/* Size */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>

        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <button
              type="button"
              key={size}
              onClick={() => handleTypeChange('size', size)}
              className={`flex h-10 min-w-10 items-center justify-center rounded-md border px-3 uppercase ${
                selectedSize === size
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>

        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <button
              type="button"
              key={color}
              onClick={() => handleTypeChange('color', color)}
              className={`rounded-md border px-3 py-2 capitalize ${
                selectedColor === color
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>

        <div className="flex w-fit items-center rounded-md border border-gray-300">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="px-4 py-2 text-lg"
            onClick={() => handleQuantityChange('dcr')}
          >
            −
          </button>

          <span className="min-w-10 text-center">{quantity}</span>

          <button
            type="button"
            aria-label="Increase quantity"
            className="px-4 py-2 text-lg"
            onClick={() => handleQuantityChange('inc')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductInteraction