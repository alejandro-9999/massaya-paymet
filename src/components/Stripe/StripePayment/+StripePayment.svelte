<script>
    // @ts-nocheck

    import { loadStripe } from "@stripe/stripe-js";
    import { onMount } from "svelte";
    import Stripe from "stripe";
    import Elements from "$lib/Elements.svelte";
    import LinkAuthenticationElement from "$lib/LinkAuthenticationElement.svelte";
    import PaymentElement from "$lib/PaymentElement.svelte";
    import Address from "$lib/Address.svelte";
    import LoadingSpinner from "../../LoadingSpinner.svelte";

    const PK_STRIPE = `${import.meta.env.VITE_STRIPE_TEST_PUBLIC_KEY}`;

    export let booking;
    export let setPaymentIntent;


    let stripe = null;
    let paymentIntent = null;
    let clientSecret = null;
    let error = null;
    let elements;
    let processing = false;
    let loading = false;

    let completed = false;

    onMount(async () => {
        stripe = await loadStripe(PK_STRIPE);
        if (booking.appointment) {
            console.log(booking.appointment.booking_code);
            let stripeIntent = await getStripeIntent(
                booking.appointment.booking_code,
            );
            console.log(stripeIntent);

            if (stripeIntent != null) {
                clientSecret = stripeIntent.client_secret;
            }
        }
    });

    const getStripeIntent = async (booking_code) => {
        loading = true;

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const res = await fetch(
            `${import.meta.env.VITE_SVELTE_APP_API_URL}/retrieve-appointment/${booking_code}/payment-intent`,
            requestOptions,
        );
        const data = await res.json();
        if (res.status === 200) {
            loading = false;
            return data;            
        }
        return null; 
    };

    async function submit() {
        loading = true;
        // avoid processing duplicates
        if (processing) return;

        processing = true;

        // confirm payment with stripe
        const result = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        });

       

        if (result.error) {
            // payment failed, notify user
            error = result.error;
            console.log("Error");
            processing = false;
            loading = false;
        } else {
            // payment succeeded, redirect to "thank you" page
            completed = true;
            processing = false;
            loading = false;
           
        }
    }
</script>

<div>
    {#if !completed}
        {#if error}
            <p class="error">{error.message} Please try again.</p>
        {/if}
        {#if clientSecret}
            <Elements
                {stripe}
                {clientSecret}
                theme="night"
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

        {#if !booking || !clientSecret || loading}
            <LoadingSpinner />
        {/if}
    {:else}
        <h1>Payment completed</h1>
    {/if}
</div>

<style>
    .error {
        color: tomato;
        margin: 2rem 0 0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 2rem 0;
    }

    button {
        padding: 1rem;
        border-radius: 5px;
        border: solid 1px #ccc;
        color: white;
        background: var(--link-color);
        font-size: 1.2rem;
        margin: 1rem 0;
    }
</style>
