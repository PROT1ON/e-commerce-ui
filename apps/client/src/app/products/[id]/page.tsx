import Image from 'next/image'
import ProductInteraction from '@/components/ProductInteraction'
import { ProductType } from '@/components/types'
import React from 'react'

// temp data
const products: ProductType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
]

const ProductsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{
    color?: string
    size?: string
  }>
}) => {
  const { id } = await params
  const { size, color } = await searchParams

  const currentProduct = products.find(
    (item) => item.id === Number(id)
  )

  if (!currentProduct) {
    return <div>Product not found</div>
  }

  const selectedColor = color || currentProduct.colors[0]
  const selectedSize = size || currentProduct.sizes[0]

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">

      {/* Image */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={currentProduct.images?.[selectedColor] || ''}
          alt={currentProduct.name}
          fill
          className="object-contain rounded-md"
        />
      </div>

      {/* Details */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">

        <h1 className="text-2xl font-medium">
          {currentProduct.name}
        </h1>

        <p className="text-gray-500">
          {currentProduct.description}
        </p>

        <h2 className="text-2xl font-semibold">
          ${currentProduct.price.toFixed(2)}
        </h2>

        <ProductInteraction
          product={currentProduct}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />

        {/* Card Info */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="Klarna"
            width={50}
            height={25}
            className="rounded-md"
          />

          <Image
            src="/cards.png"
            alt="Credit cards"
            width={50}
            height={25}
            className="rounded-md"
          />

          <Image
            src="/stripe.png"
            alt="Stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>

        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="underline hover:text-black">
            Privacy Policy
          </span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">
            Refund Policies
          </span>
          .
        </p>

      </div>
    </div>
  )
}

export default ProductsPage