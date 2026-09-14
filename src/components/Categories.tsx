'use client'

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
    const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
const Categories = () => {

    //Serarch params
    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedCategory = searchParams.get('category')

    console.log(selectedCategory)
    //creatig a button for routes 
    const handleChange = (value: null | string) => {
        router.push(`/?category = ${value}`)
    }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
            {categories.map((cat) => (
                <div className={ ` flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md
                 ${cat.slug === selectedCategory ?
                  'bg-white' : 
                  'bg-gray-400'} 
                  `} key={cat.name}
                  onClick={}
                  >
                    {cat.icon}
                    {cat.name}
                </div>
            ))}
    </div>
  )
}

export default Categories