"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import { useEffect, useState } from "react";
import ProductModal from "../../components/products/product-modal";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product.services";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/delete-modal";

const ProductManagement = ()  => {
    const [products, setProducts]= useState<Product[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProducts, setSelectedProduct] = useState<Product | null>(null);
    const [productToDeleteId, setProductToDeleteId] = useState("");

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            if (data) {
                setProducts(data)
            }
        } catch(error) {
            console.error("Failed to fetch product", error)
        }
    };

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    const handleDelete = (id: string) => {
        setProductToDeleteId(id);
        setIsDeleteModalOpen(true)
    }

    const handleDeleteConfirm = async () => {
        if(!productToDeleteId) return;
        try {
            await deleteProduct(productToDeleteId);
            fetchProducts();
            toast.success("Product deleted successfully");
            setIsDeleteModalOpen(false);
            setProductToDeleteId("");
        } catch (error) {
            console.error("Failed to delete product", error);
            toast.success("Failed to deleted product")
        }
    } 

    useEffect(() => {
        fetchProducts();
    },[]);

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProduct(null);
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
                    onClick={() => setIsModalOpen (true)}>
                    <FiPlus size={24}></FiPlus>
                    Add Product
                </Button>
            </div>
            <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete}></ProductTable>
            <ProductModal
                product={selectedProducts} onSuccess={fetchProducts} isOpen={isModalOpen} onClose={handleCloseModal}
            ></ProductModal>
            <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm}></DeleteModal>
        </div>
    );
};

export default ProductManagement;