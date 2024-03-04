<script>
    import { loadStripe } from "@stripe/stripe-js";
    import { onMount } from "svelte";
    import Stripe from 'stripe'

    const PK_STRIPE = `${import.meta.env.VITE_STRIPE_TEST_PUBLIC_KEY}`;
    const SK_STRIPE = `${import.meta.env.VITE_STRIPE_TEST_SECRET_KEY}`;


    let stripe = null;
    let stripeService = null;
    let paymentIntent = null;
    let clientSecret = null;
    let error = null;
    let elements;
    let processing = false;

    console.log();

    onMount(async () => {
        console.log(PK_STRIPE);
        stripe = await loadStripe(PK_STRIPE);
        stripeService = new Stripe(SK_STRIPE);
        paymentIntent = await stripeService.paymentIntents.create({
            amount: 2000,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        console.log(paymentIntent);
    });
</script>

<div>
    <h3>{PK_STRIPE}</h3>
</div>
