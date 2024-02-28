<script>
    // @ts-ignore
    export let data;
    const { booking } = data;
    import Card from "../../../components/Card.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";

</script>

<Card>
    <BokingInfo {booking} editabled={false} />
   
</Card>

<style>
</style>
