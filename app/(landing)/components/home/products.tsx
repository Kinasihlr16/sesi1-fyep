import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/button";

const productList =[
    {
        name:"SportsOn Product 1",
        category: "Running",
        price: 450000,
        imgUrl: "pic1.svg",
    },
    {
        name:"SportsOn Product 2",
        category: "Running",
        price: 250000,
        imgUrl: "pic2.svg",
    },
    {
        name:"SportsOn Product 3",
        category: "Running",
        price: 500000,
        imgUrl: "pic3.svg",
    },
    {
        name:"SportsOn Product 4",
        category: "Running",
        price: 150000,
        imgUrl: "pic4.svg",
    },
    {
        name:"SportsOn Product 5",
        category: "Running",
        price: 150000,
        imgUrl: "pic5.svg",
    },
    {
        name:"SportsOn Product 6",
        category: "Running",
        price: 250000,
        imgUrl: "pic6.svg",
    },
    {
        name:"SportsOn Product 7",
        category: "Running",
        price: 480000,
        imgUrl: "pic7.svg",
    },
    {
        name:"SportsOn Product 9",
        category: "Running",
        price: 410000,
        imgUrl: "pic8.svg",
    },
]

const ProductSection = () => {
    return (
        <section id="product-section" className="container mx-auto mt-32">
            <h2 className="font-bold italic text-4xl text-center mb-11"> 
                <span className="text-primary">OUR</span>PRODUCTS</h2>
            <div className="grid grid-cols-4 gap-5">
                {productList.map((product, index) => (
                    <Link href="#" key={index} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                        <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                            <Image src={`/images/products/${product.imgUrl}`} alt={product.name} width={300} height={300} className="aspect-square object-contain"></Image>
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                                    <FiPlus size={24}/> 
                            </Button>
                        </div>
                        <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                        <div className="flex justify-between mb-8">
                            <div className="text-gray-500">{product.category}</div>
                                <div className="font-medium text-primary">
                                    {Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        maximumSignificantDigits: 3,
                                    }).format(product.price)}
                                </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ProductSection;