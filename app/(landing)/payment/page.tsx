import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
import PaymentOptions from "../components/layouts/payment/payment-option";
import PaymentSteps from "../components/layouts/payment/payment-steps";

const Payment = () => {
    return(
        <main className="bg-gray-100 min-h-[80vh] pt-20">
            <div className="max-2-5xl mx-auto p-20">
                <h1 className="text-5xl font-bold text-center mb-10">Payment</h1>
                <div className="grid grid-cols-2 gap-14">
                <PaymentOptions></PaymentOptions>
                <PaymentSteps></PaymentSteps>
                </div>
            </div>
        </main>
    ) 
}

export default Payment;