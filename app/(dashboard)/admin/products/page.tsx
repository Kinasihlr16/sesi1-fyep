"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import { useState } from "react";
import ProductModal from "../../components/products/product-modal";

const ProductManagement = ()  => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return(
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">
                        Product Management
                    </h1>
                    <p className="opacity-50">
                        Manage your inventory, price and stock
                    </p>
                </div>
                <Button className="rounded-lg" 
                    onClick={() => setIsOpen (true)}>
                    <FiPlus size={24}></FiPlus>
                    Add Product
                </Button>
            </div>
            <ProductTable></ProductTable>
            <ProductModal
                isOpen={isOpen} onClose={handleCloseModal}
            ></ProductModal>
        </div>
    );
};

export default ProductManagement;