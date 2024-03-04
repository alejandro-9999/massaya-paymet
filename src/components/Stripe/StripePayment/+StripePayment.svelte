<script>
    import { loadStripe } from "@stripe/stripe-js";
    import { onMount } from "svelte";
    import Stripe from "stripe";
    import Elements from "$lib/Elements.svelte";
    import LinkAuthenticationElement from "$lib/LinkAuthenticationElement.svelte";
    import PaymentElement from "$lib/PaymentElement.svelte";
    import Address from "$lib/Address.svelte";

    const PK_STRIPE = `${import.meta.env.VITE_STRIPE_TEST_PUBLIC_KEY}`;
    const SK_STRIPE = `${import.meta.env.VITE_STRIPE_TEST_SECRET_KEY}`;

    // @ts-ignore
    let stripe = null;
    let stripeService = null;
    let paymentIntent = null;
    // @ts-ignore
    let clientSecret = null;
    // @ts-ignore
    let error = null;
    // @ts-ignore
    let elements;
    let processing = false;

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

        clientSecret = paymentIntent.client_secret;

        console.log(paymentIntent);
    });

    async function submit() {
        // avoid processing duplicates
        if (processing) return;

        processing = true;

        // confirm payment with stripe
        const result = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        });

        // log results, for debugging
        console.log({ result });

        if (result.error) {
            // payment failed, notify user
            error = result.error;
            processing = false;
        } else {
            // payment succeeded, redirect to "thank you" page
            goto("/examples/payment-element/thanks");
        }
    }

</script>

<div>
    {#if error}
        <p class="error">{error.message} Please try again.</p>
    {/if}
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
  