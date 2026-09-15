import z from "zod"

export type ProductType = {
    id: string | number
    name:string
    shortDescription: string
    description: string
    price:number
    colors: string[]
    sizes:string[]
    images:Record<string, string > // images is an object containing name n  url both are string
}

export type ProductsType = ProductType[]

export type CartItemType =ProductType & {
    quantity:number
    selectedSize:string
    selectedColor:string
}

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required"),

  email: z
    .email("Invalid email"),

  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits")
    .max(10, "Phone number must be between 7 and 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),

  address: z
    .string()
    .min(1, "Address is required"),

  city: z
    .string()
    .min(1, "City is required"),
})

export type shippingFormInputs = z.infer<typeof shippingFormSchema>

export const paymentFormSchema = z.object({ cardNumber: z .string() .min(16, "Card number must be at least 16 characters"), 
    cardHolder: z .string() .min(2, "Card holder name is required"),
     expiry: z .string() .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"), cvv: z .string() .regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"), })
     
export type paymentFormInputs = z.infer<typeof paymentFormSchema>