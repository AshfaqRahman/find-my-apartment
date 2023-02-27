import AddressForm from "components/checkout/AddressForm"
import Checkout from "components/checkout/Checkout"
import PaymentForm from "components/checkout/PaymentForm"
import Review from "components/checkout/Review"


function advancedSearch(){
    return (
        <>
        <Checkout />
        <AddressForm />
        <PaymentForm />
        <Review />
        </>
        
    )
}

export default advancedSearch