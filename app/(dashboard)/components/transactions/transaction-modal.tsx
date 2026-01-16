import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import Image from "next/image";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CategoryModal = ({ isOpen, onClose }: TCategoryModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image
            src="/images/transactions.svg"
            alt="payment proof"
            width={200}
            height={401}
          ></Image>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2.5 text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">23/02/2026 19:32</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Costumer</div>
              <div className="text-right">Rahayu Laras</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">08123456789</div>
            </div>
            <div className="flex justify-between font-medium gap-10">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">
                Merdeka Street, Jakarta, Indonesia, 332122
              </div>
            </div>
          </div> 

          <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
            <div className="bg-gray-100 rounded aspect-square w-8 h-8">
              <Image
                src="/images/products/pic1.svg"
                width={30}
                height={30}
                alt="product image"
              ></Image>
            </div>
            <div className="font-medium text-sm">Sportson Hyperfast Shoes</div>
            <div className="font-medium ml-auto text-sm">1 units</div>
          </div>
          <div className="flex justify-between text-sm mt-6">
            <h4 className="font-semibold">Total</h4>
            <div className="text-primary font-semibold">
              {priceFormatter(294000)}
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-12">
            <Button
              className="text-primary! bg-primary-light! rounded-md"
              size="small"
            >
              <FiX size={20}></FiX>
              Reject
            </Button>
            <Button
              className="text-white! bg-[#50C252]! rounded-md"
              size="small"
            >
              <FiCheck size={20}></FiCheck>
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;

