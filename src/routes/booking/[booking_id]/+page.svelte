<script>

    import Button from "../../../components/Button.svelte";
    import Card from "../../../components/Card.svelte";
    import LoadingSpinner from "../../../components/LoadingSpineer.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";
    import QrLink from "../../../components/QRLink.svelte";


    export let data;
    const { booking } = data;
   
    let payment_status = booking.appointment.payment_status;

    let confirmed = false;
    let loading = false;


    let customer_payment_link = `${import.meta.env.VITE_SVELTE_APP_URL}/payment/${booking.appointment.booking_code}`;


    const confirmPayment = async () => {
        loading = true;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch(`${import.meta.env.VITE_SVELTE_APP_API_URL}/confirm-appointment/${booking.appointment.booking_code}`,requestOptions);
        const data = await res.json()
        if (res.status === 200) {
            confirmed = true;
            loading = false;
            payment_status = data.appointment.payment_status;
        };
    }


</script>

<Card>

    {#if payment_status == "paid"}
        <h1>Confirmed</h1>
    {:else if payment_status == "awaiting_customer"}
        <QrLink/>
    {:else if payment_status == "unpaid"} 
        <BokingInfo {booking} editabled={true} />
        <div class="send-confirm">
            <Button class="dark md" on:click={() => confirmPayment()}>
                Confirm
            </Button>
        </div>
    {/if}

    {#if loading}
        <LoadingSpinner/>
    {/if}

</Card>

<style>
    .send-confirm {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
</style>
