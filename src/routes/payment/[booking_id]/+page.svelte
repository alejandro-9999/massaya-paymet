<script>
    // @ts-ignore
    // @ts-ignore
    export let data;
    const { booking } = data;
    import Card from "../../../components/Card.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";
    import TipsPanel from "../../../components/Tips/TipsPanel.svelte";
    import ProductsTab from "../../../components/Products/ProductsTab.svelte";
    import { onMount } from "svelte";
    import { loadStripe } from "@stripe/stripe-js";
    import {
        Elements,
        PaymentElement,
        LinkAuthenticationElement,
        Address,
    } from "$lib";
    import Stripe from "stripe";

    // @ts-ignore
    let stripe = null;
    let clientSecret = null;

    onMount(async () => {
        stripe = new Stripe(process.env.PUBLIC_STRIPE_KEY);

        clientSecret = await stripe.paymentIntents.create({
            amount: 100,
            currency: "usd",
            payment_method_types: ["card"],
        });
    });
</script>

<Card>
    <BokingInfo {booking} editabled={false} />
    <hr />
    <TipsPanel />
    <ProductsTab />
    {#if clientSecret}
        <Elements
            {stripe}
            {clientSecret}
            theme="flat"
            labels="floating"
            variables={{ colorPrimary: "#7c4dff" }}
            rules={{ ".Input": { border: "solid 1px #0002" } }}
            bind:elements
        >
            <form on:submit|preventDefault={submit}>
                <LinkAuthenticationElement />
                <PaymentElement />
                <Address mode="billing" />

                <button disabled={processing}>
                    {#if processing}
                        Processing...
                    {:else}
                        Pay
                    {/if}
                </button>
            </form>
        </Elements>
    {:else}
        Loading...
    {/if}
</Card>

<style>
</style>
