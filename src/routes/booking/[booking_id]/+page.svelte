<script>
    export let data;
    const { booking } = data;
    import Button from "../../../components/Button.svelte";
    import Card from "../../../components/Card.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";
    console.log(booking);
</script>

<Card>
    <BokingInfo {booking} editabled={true} />
    <div class="send-confirm">
        <Button class="dark md" on:click={() => console.log("Clicked")}>
            Confirm
        </Button>
    </div>
</Card>

<style>
    .send-confirm {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
</style>
