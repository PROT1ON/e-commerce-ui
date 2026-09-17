import { SubmitHandler, useForm } from "react-hook-form"
import { shippingFormInputs, shippingFormSchema } from "./types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const ShippingForm = ({
    setShippingForm

}: 
{
    setShippingForm:(data:shippingFormInputs) => void
}) => {
    const {register,
        handleSubmit,
        formState: {errors}
    }= useForm<shippingFormInputs>({
        resolver:zodResolver(shippingFormSchema)
    })
    const router = useRouter()
    const handleShippingForm: SubmitHandler<shippingFormInputs> = (data) => {
        setShippingForm(data)
       router.push("/cart?step=3", { scroll: false })
    }
  return (
   <form
  className="flex flex-col gap-4"
  onSubmit={handleSubmit(
    handleShippingForm,
    (errors) => console.log("Validation errors:", errors)
  )}
>
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-gray-500 font-medium">Name</label>
            <input 
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text" 
            id="name" 
            placeholder="Name"
            {...register("name")}
            />             
            {
            errors.name 
            &&  (
                    <p>
                        {errors.name.message}
                    </p>
               )}
        </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-gray-500 font-medium">Email</label>
            <input 
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text" 
            id="email" 
            placeholder="name@email.com"
            {...register("email")}
            />             
            {
            errors.email 
            &&  (
                    <p>
                        {errors.email.message}
                    </p>
               )}
        </div>
        {/* Phone Number  */}
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-gray-500 font-medium">Name</label>
            <input 
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="tel" 
            id="phone" 
            placeholder="95632155487"
            {...register("phone")}
            />             
            {
            errors.phone 
            &&  (
                    <p>
                        {errors.phone.message}
                    </p>
               )}
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-gray-500 font-medium">Address</label>
            <input 
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text" 
            id="address" 
            placeholder="Address"
            {...register("address")}
            />             
            {
            errors.address 
            &&  (
                    <p>
                        {errors.address.message}
                    </p>
               )}
        </div>

        {/* City */}
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-gray-500 font-medium">City</label>
            <input 
            className="border-b border-gray-200 py-2 outline-none text-sm"
            type="text" 
            id="city" 
            placeholder="City"
            {...register("city")}
            />             
            {
            errors.city 
            &&  (
                    <p>
                        {errors.city.message}
                    </p>
               )}
        </div>
        <button 
                    className='w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2'
                    type="submit">
                        Continue
                        <ArrowRight className='w-3 h-3' />
                    </button>
    </form>
  )
}

export default ShippingForm