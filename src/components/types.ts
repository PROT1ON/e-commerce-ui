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