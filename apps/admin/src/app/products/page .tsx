import { Product,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
 
return [
  {
    id: "2",
    name: "Nike UltraBoost Pulse",
    price: 134,
    shortDescription:
      "A lightweight running shoe designed for everyday comfort and responsive performance.",
    description:
      "The Nike UltraBoost Pulse combines responsive cushioning with a breathable upper for running, training, and everyday wear.",
    sizes: ["40", "42", "44", "45"],
    colors: ["white", "gray", "pink"],
    images: {
      white: "/products/7w.png",
      gray: "/products/7g.png",
      pink: "/products/7p.png",
    },
  },
  {
    id: "3",
    name: "Adidas CloudRun Pro",
    price: 149,
    shortDescription:
      "Modern running shoes with soft cushioning and a lightweight construction.",
    description:
      "The Adidas CloudRun Pro is built for comfortable daily runs with a breathable upper and supportive sole.",
    sizes: ["40", "41", "43", "45"],
    colors: ["black", "white"],
    images: {
      black: "/products/8bl.png",
      white: "/products/8w.png",
    },
  },
  {
    id: "4",
    name: "Puma Velocity Max",
    price: 119,
    shortDescription:
      "Comfortable athletic shoes made for running and active everyday use.",
    description:
      "The Puma Velocity Max provides lightweight cushioning and a flexible sole for comfortable movement throughout the day.",
    sizes: ["39", "41", "42", "44"],
    colors: ["blue", "gray"],
    images: {
      blue: "/products/9b.png",
      gray: "/products/9g.png",
    },
  },
  {
    id: "5",
    name: "Nike Air Motion X",
    price: 159,
    shortDescription:
      "Responsive sneakers combining sporty styling with all-day comfort.",
    description:
      "Nike Air Motion X features responsive cushioning, a supportive heel, and a breathable upper designed for active lifestyles.",
    sizes: ["40", "42", "43", "45"],
    colors: ["black", "red", "white"],
    images: {
      black: "/products/10bl.png",
      red: "/products/10r.png",
      white: "/products/10w.png",
    },
  },
  {
    id: "6",
    name: "New Balance FreshStep",
    price: 129,
    shortDescription:
      "A versatile sneaker with soft cushioning and a clean everyday design.",
    description:
      "The New Balance FreshStep offers a balanced combination of cushioning, flexibility, and support for everyday activities.",
    sizes: ["39", "40", "42", "44"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/11g.png",
      green: "/products/11gr.png",
    },
  },
  {
    id: "7",
    name: "Adidas StreetFlex",
    price: 109,
    shortDescription:
      "Casual sneakers designed with a flexible sole and modern streetwear styling.",
    description:
      "Adidas StreetFlex sneakers are designed for everyday city wear with a comfortable interior and flexible outsole.",
    sizes: ["40", "41", "42", "44"],
    colors: ["white", "black"],
    images: {
      white: "/products/12w.png",
      black: "/products/12bl.png",
    },
  },
  {
    id: "8",
    name: "Nike Zoom Active",
    price: 174,
    shortDescription:
      "Performance sneakers offering responsive cushioning for active movement.",
    description:
      "Nike Zoom Active combines a lightweight upper with responsive cushioning to provide comfort during training and running.",
    sizes: ["41", "42", "43", "45"],
    colors: ["blue", "white", "orange"],
    images: {
      blue: "/products/13b.png",
      white: "/products/13w.png",
      orange: "/products/13o.png",
    },
  },
  {
    id: "9",
    name: "Puma SoftRide Runner",
    price: 124,
    shortDescription:
      "Soft and lightweight running shoes designed for comfortable daily workouts.",
    description:
      "The Puma SoftRide Runner features a cushioned sole and breathable upper for comfortable runs and everyday exercise.",
    sizes: ["39", "40", "42", "43"],
    colors: ["gray", "blue"],
    images: {
      gray: "/products/14g.png",
      blue: "/products/14b.png",
    },
  },
  {
    id: "10",
    name: "Reebok FlexRun Elite",
    price: 139,
    shortDescription:
      "Flexible running shoes with lightweight cushioning and supportive construction.",
    description:
      "Reebok FlexRun Elite provides a flexible ride with breathable materials and lightweight cushioning for everyday runners.",
    sizes: ["40", "41", "43", "44"],
    colors: ["black", "green"],
    images: {
      black: "/products/15bl.png",
      green: "/products/15gr.png",
    },
  },
  {
    id: "11",
    name: "Nike Air Street",
    price: 145,
    shortDescription:
      "Stylish everyday sneakers combining classic design with modern comfort.",
    description:
      "Nike Air Street features a comfortable cushioned sole and versatile design suitable for casual outfits and everyday activities.",
    sizes: ["40", "42", "44", "45"],
    colors: ["white", "red"],
    images: {
      white: "/products/16w.png",
      red: "/products/16r.png",
    },
  },
  {
    id: "12",
    name: "Adidas RunNova",
    price: 129,
    shortDescription:
      "Lightweight trainers designed for comfortable running and daily workouts.",
    description:
      "Adidas RunNova trainers feature a breathable upper and lightweight cushioning designed for daily training and running.",
    sizes: ["39", "41", "42", "44"],
    colors: ["pink", "white", "gray"],
    images: {
      pink: "/products/17p.png",
      white: "/products/17w.png",
      gray: "/products/17g.png",
    },
  },
  {
    id: "13",
    name: "Puma NitroFlex",
    price: 164,
    shortDescription:
      "High-performance trainers with responsive cushioning and a lightweight feel.",
    description:
      "Puma NitroFlex combines responsive cushioning with a lightweight upper for energetic runs and high-intensity workouts.",
    sizes: ["40", "42", "43", "45"],
    colors: ["orange", "black"],
    images: {
      orange: "/products/18o.png",
      black: "/products/18bl.png",
    },
  },
  {
    id: "14",
    name: "Nike React Runner",
    price: 179,
    shortDescription:
      "Responsive running shoes designed for smooth and comfortable movement.",
    description:
      "Nike React Runner features responsive cushioning and a supportive construction designed to provide a smooth running experience.",
    sizes: ["40", "41", "43", "44"],
    colors: ["gray", "blue", "white"],
    images: {
      gray: "/products/19g.png",
      blue: "/products/19b.png",
      white: "/products/19w.png",
    },
  },
  {
    id: "15",
    name: "Adidas Urban Boost",
    price: 154,
    shortDescription:
      "Modern sneakers combining athletic comfort with versatile urban styling.",
    description:
      "Adidas Urban Boost offers a comfortable cushioned sole and modern silhouette designed for city walking and casual wear.",
    sizes: ["40", "42", "44", "45"],
    colors: ["black", "white"],
    images: {
      black: "/products/20bl.png",
      white: "/products/20w.png",
    },
  },
  {
    id: "16",
    name: "New Balance Motion 5",
    price: 139,
    shortDescription:
      "Everyday trainers offering reliable cushioning and a comfortable fit.",
    description:
      "New Balance Motion 5 is designed for everyday movement with a supportive fit, cushioned sole, and breathable upper.",
    sizes: ["39", "40", "42", "43"],
    colors: ["gray", "pink"],
    images: {
      gray: "/products/21g.png",
      pink: "/products/21p.png",
    },
  },
  {
    id: "17",
    name: "Reebok Classic Runner",
    price: 114,
    shortDescription:
      "Classic-inspired sneakers with lightweight comfort for everyday wear.",
    description:
      "Reebok Classic Runner combines a timeless silhouette with a comfortable sole and lightweight construction for daily use.",
    sizes: ["40", "41", "43", "45"],
    colors: ["white", "green"],
    images: {
      white: "/products/22w.png",
      green: "/products/22gr.png",
    },
  },
  {
    id: "18",
    name: "Nike Air Pulse Max",
    price: 169,
    shortDescription:
      "Cushioned athletic shoes designed for running, training, and daily movement.",
    description:
      "Nike Air Pulse Max delivers responsive cushioning and a breathable design for active days and everyday comfort.",
    sizes: ["40", "42", "43", "45"],
    colors: ["black", "purple", "white"],
    images: {
      black: "/products/23bl.png",
      purple: "/products/23p.png",
      white: "/products/23w.png",
    },
  },
  {
    id: "19",
    name: "Puma Street Racer",
    price: 119,
    shortDescription:
      "Sporty casual sneakers with a flexible sole and comfortable fit.",
    description:
      "Puma Street Racer combines sporty styling with a flexible outsole and comfortable upper for everyday city wear.",
    sizes: ["39", "41", "42", "44"],
    colors: ["red", "black"],
    images: {
      red: "/products/24r.png",
      black: "/products/24bl.png",
    },
  },
  {
    id: "20",
    name: "Adidas CloudFlex",
    price: 149,
    shortDescription:
      "Lightweight trainers with soft cushioning and a breathable upper.",
    description:
      "Adidas CloudFlex is designed for comfortable movement with lightweight cushioning and a breathable construction.",
    sizes: ["40", "41", "43", "45"],
    colors: ["blue", "white", "gray"],
    images: {
      blue: "/products/25b.png",
      white: "/products/25w.png",
      gray: "/products/25g.png",
    },
  },
  {
    id: "21",
    name: "Nike Everyday Runner",
    price: 124,
    shortDescription:
      "Versatile running shoes designed for everyday comfort and active lifestyles.",
    description:
      "Nike Everyday Runner provides lightweight cushioning and a comfortable fit for walking, running, and daily activities.",
    sizes: ["40", "42", "44", "45"],
    colors: ["green", "white"],
    images: {
      green: "/products/26gr.png",
      white: "/products/26w.png",
    },
  },
]



};

const ProductsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All products</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default ProductsPage;
