"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/button";
import priceFormatter from "@/app/utils/price-formatter";

const productList =[
    {
        name:"SportsOn Hyperfast Shoes",
        category: "Running",
        price: 329000,
        imgUrl: "pic1.svg",
    },
    {
        name:"SportsOn Rackets Tennis",
        category: "Running",
        price: 250000,
        imgUrl: "pic2.svg",
    },
    {
        name:"SportsOn Slowlivin",
        category: "Running",
        price: 119000,
        imgUrl: "pic3.svg",
    },
    {
        name:"SportsOn Hypersoccer v2",
        category: "Running",
        price: 150000,
        imgUrl: "pic4.svg",
    },
    {
        name:"SportsOn Slowlivin",
        category: "Running",
        price: 119000,
        imgUrl: "pic5.svg",
    },
    {
        name:"SportsOn Hyperfast Shoes",
        category: "Running",
        price: 329000,
        imgUrl: "pic6.svg",
    },
    {
        name:"SportsOn Rackets Tennis",
        category: "Running",
        price: 999000,
        imgUrl: "pic7.svg",
    },
    {
        name:"SportsOn Basketball",
        category: "Running",
        price: 1500000,
        imgUrl: "pic8.svg",
    },
]

const ProductSection = () => {
    return (
        <section id="product-section" className="container mx-auto mt-32 mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-11"> 
                <span className="text-primary">OUR</span>PRODUCTS</h2>
            <div className="grid grid-cols-4 gap-5">
                {productList.map((product, index) => (
                    <Link href={`/product/${product.name}`} 
                    key={index} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
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
                                    {priceFormatter(product.price)}
                                </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ProductSection;