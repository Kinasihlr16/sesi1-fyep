"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../components/categories/category-table";
import { useState } from "react";
import CategoryModal from "../../components/categories/category-modal";

const CategoryManagement = ()  => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return(
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">
                        Category Management
                    </h1>
                    <p className="opacity-50">
                        Organize your products into categories.
                    </p>
                </div>
                <Button className="rounded-lg" 
                    onClick={() => setIsOpen (true)}>
                    <FiPlus size={24}></FiPlus>
                    Add Category
                </Button>
            </div>
            <CategoryTable></CategoryTable>
            <CategoryModal
                isOpen={isOpen} onClose={handleCloseModal}
            ></CategoryModal>
            
        </div>
    );
};

export default CategoryManagement;