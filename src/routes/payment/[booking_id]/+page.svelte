<script>
    // @ts-ignore
    export let data;
    const { booking } = data;
    import Card from "../../../components/Card.svelte";
    import BokingInfo from "../../../components/Booking/BokingInfo.svelte";
    import TipsPanel from "../../../components/Tips/TipsPanel.svelte";

</script>

<Card>
    <BokingInfo {booking} editabled={false} />
    <TipsPanel/>
</Card>

<style>
</style>
