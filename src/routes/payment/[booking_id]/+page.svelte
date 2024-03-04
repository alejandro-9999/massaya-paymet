<script>
    // @ts-ignore
    export let data;
    const { booking } = data;
    import Card from "../../../components/Card.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";
    import TipsPanel from "../../../components/Tips/TipsPanel.svelte";
    import ProductsTab from "../../../components/Products/ProductsTab.svelte";
    import StripePayment from "../../../components/Stripe/StripePayment/+StripePayment.svelte";
</script>

<Card>
    <BokingInfo {booking} editabled={false} />
    <hr />
    <TipsPanel />
    <ProductsTab />
    <StripePayment/>
</Card>

<style>
</style>
