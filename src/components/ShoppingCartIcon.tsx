'use client'
import useCartStore from "@/stores/cartStores"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"


const ShoppingCartIcon = () => {
    const {cart} = useCartStore()
  return (
    <Link href='/cart' className="relative">
        <ShoppingCart className="w-4 h-4 text-gray-600" />
        <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 flex items-center font-medium justify-center rounded-full w-4 h-4 ">
            {cart.reduce((acc,item) => acc + item.quantity, 0)}
        </span>
    </Link>
  )
}

export default ShoppingCartIcon