
"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
const categories = [
  "Running",
  "Sneakers",
  "Sports",
  "Training",
  "Casual",
  "Walking",
  "Basketball",
  "Football",
  "Lifestyle",
]as const;

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
]as const;
const colors = [
  "Black",
  "White",
  "Gray",
  "Red",
  "Blue",
  "Green",
  "Pink",
  "Orange",
  "Purple",
  "Yellow",
]as const;


const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Product name must be at least 2 characters!",
    })
    .max(100),

  price: z.coerce.number().positive({
    message: "Price must be greater than 0",
  }),

  shortDescription: z
    .string()
    .min(10, {
      message: "Short description must be at least 10 characters!",
    })
    .max(200),

  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters!",
    }),

  sizes: z.array(z.enum(sizes)),
    category: z.enum(categories) ,
  colors: z.array(z.enum(colors)),
  images:z.record(z.enum(colors), z.string())
});

const AddProduct = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  });

  return (
    <SheetContent>
      <ScrollArea className="h-full">

      <SheetHeader>
        <SheetTitle>Add Product</SheetTitle>

        <SheetDescription>
          Add a new product to your store.
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form
          
          className="space-y-6 mt-6 mx-4"
          >
          {/* Product Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Nike UltraBoost Pulse"
                    {...field}
                    />
                </FormControl>

                <FormDescription>
                  Enter the name of the product.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
            />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>

                <FormControl>
                  <Input
                    type="number"
                    placeholder="134"
                    {...field}
                    />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
            />

          {/* Short Description */}
          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>

                <FormControl>
                  <Input
                    placeholder="A lightweight running shoe..."
                    {...field}
                    />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
            />
         
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Product description..."
                    {...field}
                    />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
            />
 {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category </FormLabel>

                <FormControl>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a category' />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
            />
          {/* Sizes */}
          <FormField
            control={form.control}
            name="sizes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sizes</FormLabel>

                <FormControl>
                  <div className="grid grid-cols-3 gap-4 my-2">
                    {sizes.map(size => (
                      <div className="flex items-center gap-2" key={size}>
                          <Checkbox id='size'
                          checked={field.value?.includes(size)}
                          onCheckedChange={(checked) => {
                            const currentValues= field.value || []
                            if(checked) {
                              field.onChange([...currentValues, size])
                            } else {
                              field.onChange(
                                currentValues.filter((v) => v !== size)
                              )
                            }
                          }}>
                              <label className="text-white" htmlFor="size">
                                {size}
                              </label>
                          </Checkbox>
                        </div>
                    ))}
                  </div>
                </FormControl>

                <FormDescription>
                  Select the available sizes fdor the product
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
            />

          {/* Colors */}
          <FormField
            control={form.control}
            name="colors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colors</FormLabel>

                <FormControl>
                  <div className="grid grid-cols-3 gap-4 my-2">
                    {colors.map(colors => (
                      <div className="flex items-center gap-2" key={colors}>
                          <Checkbox id='size'
                          checked={field.value?.includes(colors)}
                          onCheckedChange={(checked) => {
                            const currentValues= field.value || []
                            if(checked) {
                              field.onChange([colors])
                            } else {
                              field.onChange(
                                currentValues.filter((v) => v !== colors)
                              )
                            }
                          }}>
                              <label className="text-white text-xs flex items-center gap-2" htmlFor="color">
                                <div className="w-2 h-2 rounded-full" style={{backgroundColor:colors}}>
                                  {colors}
                                </div>
                              </label>
                          </Checkbox>
                        </div>
                    ))}
                  </div>
                </FormControl>

                <FormDescription>
                  Select the available colors fdor the product
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
            />

          <Button type="submit" className="w-full">
            Add Product
          </Button>
        </form>
      </Form>
            </ScrollArea>
    </SheetContent>
  );
};

export default AddProduct;

