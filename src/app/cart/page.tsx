'use client'
import PaymentForm from '@/components/PaymentForm'
import ShippingForm from '@/components/ShippingForm'
import { CartItemType } from '@/components/types'
import { ArrowRight, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const steps = [
    {
        id:1,
        name:'Shopping Cart'
    },
    {
        id:2,
        name:'Shopping Address'
    },
    {
        id:3,
        name:'Payment Method'
    }
]
//temporary data
export const CartItems: CartItemType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },

    // Cart-specific data
    quantity: 2,
    selectedSize: "m",
    selectedColor: "gray",
  },

  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },

    quantity: 1,
    selectedSize: "l",
    selectedColor: "green",
  },

  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },

    quantity: 1,
    selectedSize: "s",
    selectedColor: "blue",
  },

  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: {
      white: "/products/4w.png",
      pink: "/products/4p.png",
    },

    quantity: 3,
    selectedSize: "m",
    selectedColor: "pink",
  },

  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },

    quantity: 1,
    selectedSize: "l",
    selectedColor: "red",
  },
]
const CartPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [shippingForm , setShippingForm ] = useState(null)

    const activeStep = parseInt(searchParams.get('step') || "1")
  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>
        {/* TITLE */}
        <h1 className='text-2xl font-medium'>
            Your Shopping Cart
        </h1>
        {/* STEPS */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {steps.map(step => (
                <div className={`flex items-center gap-2 border-b pb-4 ${step.id ===activeStep ? 'border-gray-400' : 'border-gray-200'}`} key={step.id}>
                    <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                        step.id === activeStep ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                        {step.id}
                        </div>
                        <p className={`text-sm font-medium ${
                            step.id === activeStep ? 'text-gray-800' : 'bg-gray-200 '
                        }`}> 
                            {step.name}
                        </p>
                </div>
            ))}
        </div>
        {/* STeps n details */}
        <div className='w-full flex flex-col lg:flex-row gap-16'>
            {/* Steps */}
                <div className='w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8'>
                    {activeStep === 1 ? (
                        CartItems.map(item => (
                            <div className='flex items-center justify-between'
                             key={item.id}
                             >
                                {/* IMages */}
                                <div className='flex gap-8'>
                                    <div className='relative w-32 h-32 bg-gray-50rounded-lg overflow-hidden'>
                                        <Image src={item.images[item.selectedColor]}
                                        alt={item.name}
                                        fill
                                        className='object-contain'
                                        />
                                    </div>
                                    Item details 
                                    <div className='flex flex-col justify-between'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm font-medium'>
                                                {item.name}
                                            </p>
                                            <p className='text-gray-500 font-medium'>
                                                Quantity:{" "}{item.quantity}
                                            </p>
                                            <p className='text-gray-500 font-medium'>
                                                Size:{" "}{item.selectedSize}
                                            </p>
                                            <p className='text-gray-500 font-medium'>
                                                Color:{" "}{item.selectedColor}
                                            </p>
                                        </div>
                                        <p className='font-medium'>
                                            {item.price.toFixed(2)}
                                        </p>
                                    </div>
                                    {/* Delet button */}
                                    <button className='w-8 transition-all h-8 rounded-full bg-red-100 text-red-400 flex items-center justify-center cursor-pointer'>
                                        <Trash2 className='w-4 h-4' />
                                    </button>
                                    </div>
                            </div>
                        ))
                    ) : activeStep === 2 ? (
                        <ShippingForm setShippingForm={setShippingForm}/>
                    ) : activeStep == 3 && shippingForm ? 
                    <PaymentForm /> 
                    :
                    <p className=''> Fill in the shipping Form to Continue.</p> 
                }
                </div>
            {/* Details  */}
            <div className='w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max'>
                <h2 className='font-semibold'> 
                    Cart Details
                    </h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between text-sm'>
                            <p className=' text-gray-500'>
                                Subtotal
                            </p>
                            <p className='font-mdeium'>
                                ${CartItems.reduce
                                ((acc,item) => acc+item.price * item.quantity,
                                0).toFixed(2)}
                            </p>
                        </div>

                        {/* discorunt  */}

                        <div className='flex justify-between text-sm'>
                            <p className=' text-gray-500'>
                                Discount(10%)
                            </p>
                            <p className='font-medium'>
                               $ 10
                            </p>
                        </div>

                        {/* Shippiong Fee */}
                        <div className='flex justify-between text-sm'>
                            <p className=' text-gray-500'>
                                Shipping Fee
                            </p>
                            <p className='font-medium'>
                                $10
                            </p>
                        </div>
                        <hr className='border-gray-200'>
                        </hr>
                        <div className='flex justify-between text-sm'>
                            <p className=' text-gray-800'>
                                Total Amount
                            </p>
                            <p className='font-semibold'>
                                ${CartItems.reduce
                                ((acc,item) => acc+item.price * item.quantity,
                                0).toFixed(2)}
                            </p>
                        </div>
                    </div>
                   {activeStep === 1 && (
                    <button 
                    className='w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2'
                    onClick={()=> router.push('/cart?step=2', {scroll:false})}>
                        Continue
                        <ArrowRight className='w-3 h-3' />
                    </button>
                   )    
                }
            </div>
        </div>
    </div>
  )
}

export default CartPage