import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.services";
import { getImageUrl } from "@/app/lib/api";


export type TPageProps = {
  params: {id: string}>;
};
const ProductDetail = async ({params} : TPageProps) => {
  const {id} = params;

  const product = await getProductDetail(id);

    return (
      <main className="container mx-auto py-40 flex gap-12">
        <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
          <Image
            src={getImageUrl(product.imageUrl)}
            width={550}
            height={550}
            alt={product.name}
            className="aspect-square object-contain w-full"
          ></Image>
        </div>
        <div className="w-full py7">
          <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
          <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
            {product.category.name}
          </div>
          <p className="leading-loose text-justify mb-8">
            {product.description}
          </p>
          <div className="text-primary text-[32px] font-semibold mb-12">
            {priceFormatter(product.price)}
          </div>
          <ProductActions product = {product} stock={product.stock}></ProductActions>
        </div>
      </main>
    );
};

export default ProductDetail;   