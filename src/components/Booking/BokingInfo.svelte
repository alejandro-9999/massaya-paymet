<script>
    // @ts-nocheck
    import MdAddCircle from "svelte-icons/md/MdAddCircle.svelte";
    import ServiceCard from "../Services/ServiceCard.svelte";
    export let booking;
    export let editabled = false;
</script>

<div class="card-header">
    <h2 class="section-title">Order Summary</h2>
    {#if editabled}
        <small class="section-subtitle">Section to be filled by staff</small>
    {/if}
</div>
<hr class="divider" />
<p>
    <strong>{booking?.appointment?.date}</strong> at
    <strong>{booking?.appointment?.start_time}</strong>
</p>

<div class="card-info-item">
    <span><strong>Client</strong></span><br />
    <span class="item-text">{booking?.appointment?.customer?.full_name}</span>
    <br />
    <small
        >(Click <a href="/new-request">here</a> to book another appointment with
        this customer)</small
    >
</div>
<br />
<div class="card-info-item">
    <span><strong>Staff</strong></span><br />
    <span class="item-text">{booking?.appointment?.staff?.name}</span>
</div>

<div class="summary-header">
    <h3>Service Summary</h3>
    {#if editabled}
        <div class="icon">
            <MdAddCircle />
        </div>
    {/if}    
</div>

<ServiceCard {editabled} service={booking?.appointment?.service} />

<style>
    .card-info-item a {
        color: aquamarine;
    }

    .item-text {
        color: lightgray;
    }
    .summary-header {
        display: flex;
        gap: 5px;
        align-items: center;
        align-content: center;
    }
    .icon {
        width: 1.5em;
        height: 1.5em;
        margin: 0px;
        padding: 0px;
        padding: 0px !important;
        color: green;
        &:active {
            transform: scale(0.9);
        }
    }

    .divider {
        border-top: 1px solid rgba(255, 255, 255, 0.308);
        backdrop-filter: blur(10px);
        width: 100%;
    }

    .section-title {
        margin-bottom: 0px;
    }

    .section-subtitle {
        margin-bottom: 0px;
        color: lightgrey;
    }
</style>
