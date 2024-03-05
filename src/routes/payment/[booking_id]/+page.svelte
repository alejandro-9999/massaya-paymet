<script>
    // @ts-nocheck
    export let data;
    const { booking } = data;
    import Card from "../../../components/Card.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";
    import TipsPanel from "../../../components/Tips/TipsPanel.svelte";
    import ProductsTab from "../../../components/Products/ProductsTab.svelte";
    import StripePayment from "../../../components/Stripe/StripePayment/+StripePayment.svelte";

    let paymentIntent = null; 
    
    const setPaymentIntent = (value) =>{
        paymentIntent = value;
    }

</script>

<Card>
    <BokingInfo {booking} editabled={false} />
    <hr />
    <TipsPanel />
    <!-- <ProductsTab /> -->
    <StripePayment setPaymentIntent={setPaymentIntent}  booking={booking}/>
</Card>

<style>
</style>
