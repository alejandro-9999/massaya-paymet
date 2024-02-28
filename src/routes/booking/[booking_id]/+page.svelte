<script>
    export let data;
    const { booking } = data;
    import MdAddCircle from "svelte-icons/md/MdAddCircle.svelte";
    import ServiceCard from "../../../components/Services/ServiceCard.svelte";
    import Button from "../../../components/Button.svelte";
    console.log(booking);
</script>

<div class="card-container">
    <div class="card">
        <div class="card-header">
            <h2 class="section-title">Order Summary</h2>
            <small class="section-subtitle">Section to be filled by staff</small
            >
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
                >(Click <a href="/new-request">here</a> to book another appointment with this
                customer)</small
            >
        </div>
        <br />
        <div class="card-info-item">
            <span><strong>Staff</strong></span><br />
            <span class="item-text">{booking?.appointment?.staff?.name}</span>
        </div>

        <div class="summary-header">
            <h3>Service Summary</h3>
            <div class="icon">
                <MdAddCircle />
            </div>
        </div>

        <ServiceCard service={booking?.appointment?.service}/>
        <div class="send-confirm">
            <Button class="dark md" on:click={()=>console.log("Clicked")}>
                Confirm
            </Button>
        </div>        
    </div>
</div>

<style>

    .send-confirm{
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
    .card-info-item a {
        color: aquamarine;
    }

    .item-text{
        color: lightgray;
    }
    .summary-header{
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
        &:active{
            transform: scale(0.9);
        }
    }

    

    .divider {
        border-top: 1px solid rgba(255, 255, 255, 0.308);
        backdrop-filter: blur(10px);
        width: 100%;
    }

    .card-container {
        padding-top: 8vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .card {
        background-color: rgba(29, 25, 25, 0.567);
        backdrop-filter: blur(10px);
        /* Fondo gris transparente como blur */

        border: 2px solid gray;
        border-radius: 10px;
        color: #fff;
        /* Texto blanco */
        padding: 20px 30px;
        min-height: 300px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: calc(40% - 40px);
    }

    .section-title {
        margin-bottom: 0px;
    }

    .section-subtitle {
        margin-bottom: 0px;
        color: lightgrey;
    }

    /* Estilos adicionales para hacerlo responsive */
    @media (max-width: 768px) {
        .card {
            width: calc(70% - 40px);
        }
    }

    @media (max-width: 480px) {
        .card {
            width: calc(100% - 40px);
        }
    }

    button.button-light {
        width: auto;
        display: block;
        font-size: 14px;
        margin: 40px auto 0;
        padding: 10px;
        background-color: white;
        color: black;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: rgba(221, 205, 205, 0.724);
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(29, 25, 25, 0.4);
        }

        &:active {
            transform: scale(0.95);
        }
    }
</style>
