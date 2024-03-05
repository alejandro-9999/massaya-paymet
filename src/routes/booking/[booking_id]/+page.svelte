<script>
    import Button from "../../../components/Button.svelte";
    import Card from "../../../components/Card.svelte";
    import LoadingSpinner from "../../../components/LoadingSpinner.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";
    import QrLink from "../../../components/QRLink.svelte";
    import Input from "../../../components/Input.svelte";
    import { text } from "@sveltejs/kit";

    export let data;
    const { booking } = data;

    let payment_status = booking.appointment.payment_status;

    let confirmed = false;
    let loading = false;

    let customer_payment_link = `${import.meta.env.VITE_SVELTE_APP_URL}/payment/${booking.appointment.booking_code}`;

    const confirmPayment = async () => {
        loading = true;

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const res = await fetch(
            `${import.meta.env.VITE_SVELTE_APP_API_URL}/confirm-appointment/${booking.appointment.booking_code}`,
            requestOptions,
        );
        const data = await res.json();
        if (res.status === 200) {
            confirmed = true;
            loading = false;
            payment_status = data.appointment.payment_status;
        }
    };

    const checkCode = async () => {};
</script>

<Card>
    {#if payment_status == "paid"}
        <h1>Confirmed</h1>
    {:else if payment_status == "awaiting_customer"}
        <div class="awaiting-customer-panel">
            <h1>Awaiting Customer</h1>
            <div class="qr-container">
                <div class="qr-item">
                    <QrLink code={customer_payment_link} />
                </div>
            </div>
            <span
                >Click <a href={customer_payment_link}>here</a> to open the payment
                link</span
            >
            <div class="confirmation-code-container">
                <Input />

                <div class="check-button">
                    <Button class="dark md" on:click={() => checkCode()}>
                        Check Code
                    </Button>
                </div>
            </div>
        </div>
    {:else if payment_status == "unpaid"}
        <BokingInfo {booking} editabled={true} />
        <div class="send-confirm">
            <Button class="dark md" on:click={() => confirmPayment()}>
                Confirm
            </Button>
        </div>
    {/if}

    {#if loading}
        <LoadingSpinner />
    {/if}
</Card>

<style>
    .check-button {
        margin-top: 10px;
    }
    .confirmation-code-container {
        margin-top: 20px;
    }

    a {
        color: aquamarine;
    }
    .awaiting-customer-panel {
        text-align: center;
    }
    .qr-container {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 10px;
    }
    .qr-item {
        padding: 5px;
        border-radius: 5px;
        background-color: #fff;
        width: 200px;
    }
    .send-confirm {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
</style>
