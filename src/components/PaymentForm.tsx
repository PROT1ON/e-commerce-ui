
"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { paymentFormInputs, paymentFormSchema } from "./types"

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<paymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  })

  const router = useRouter()

  const handlePaymentForm: SubmitHandler<paymentFormInputs> = (data) => {
    console.log(data)

    // Move to the next step / confirmation
    router.push("/cart?step=4", { scroll: false })
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      {/* Card Number */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>

        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          {...register("cardNumber")}
        />

        {errors.cardNumber && (
          <p className="text-xs text-red-500">
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      {/* Card Holder */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Card Holder
        </label>

        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
        />

        {errors.cardHolder && (
          <p className="text-xs text-red-500">
            {errors.cardHolder.message}
          </p>
        )}
      </div>

      {/* Expiry + CVV */}
      <div className="flex gap-4">
        {/* Expiry */}
        <div className="flex flex-col gap-1 flex-1">
          <label
            htmlFor="expiry"
            className="text-xs text-gray-500 font-medium"
          >
            Expiry Date
          </label>

          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text"
            id="expiry"
            placeholder="MM/YY"
            {...register("expiry")}
          />

          {errors.expiry && (
            <p className="text-xs text-red-500">
              {errors.expiry.message}
            </p>
          )}
        </div>

        {/* CVV */}
        <div className="flex flex-col gap-1 flex-1">
          <label
            htmlFor="cvv"
            className="text-xs text-gray-500 font-medium"
          >
            CVV
          </label>

          <input
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="password"
            id="cvv"
            placeholder="123"
            {...register("cvv")}
          />

          {errors.cvv && (
            <p className="text-xs text-red-500">
              {errors.cvv.message}
            </p>
          )}
        </div>
      </div>

      <button
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
        type="submit"
      >
        Place Order
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  )
}


export default PaymentForm