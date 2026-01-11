import CartItmes from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";

const Checkout = () => {
    return(
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-2-5xl mx-auto p-20">
                <h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>
                <div className="grid grid-cols-2 gap-14">
                    <OrderInformation></OrderInformation>
                    <CartItmes></CartItmes>
                </div>
            </div>
        </main>
    ) 
}

export default Checkout;