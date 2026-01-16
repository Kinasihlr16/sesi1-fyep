import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CategoryModal = ({ isOpen, onClose }: TCategoryModalProps) => {
    const [imageFile, setImageFile] = useState<File | null> (null);
    const[imagePreview, setImagePreview] = useState<string| null> (null);
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New category">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="min-w-50">
            <ImageUploadPreview
              value={imagePreview}
              label="category Image"
              onChange={(file) => {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
            ></ImageUploadPreview>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="categoryName">category Name</label>
              <input
                type="text"
                id="categorytName"
                name="categorytName"
                placeholder="e. g. Running"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows={3}
                placeholder="Category Details..."
              ></textarea>
            </div>
          </div>
        </div>
        <Button className="ml-auto mt-3 rounded-lg">Create category</Button>
      </div>
    </Modal>
  );
};

export default CategoryModal;
