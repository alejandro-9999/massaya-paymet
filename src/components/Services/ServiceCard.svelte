<script>
    // @ts-nocheck
    export let service;
    export let editabled = true;
    import TiEdit from 'svelte-icons/ti/TiEdit.svelte'
</script>

<div class="service-card">
    {#if service}
        <div class="service-image">
            <img src={service?.image} alt="" />
        </div>
        <div class="service-content">
            {service?.name["en"]}
            {#if editabled}
                <div class="icon">
                    <TiEdit/>
                </div>
            {/if}            
        </div>
    {/if}
</div>

<style>
    .service-content{
        display: flex;
        gap: 5px;
    }
    .icon{
        width: 20px;
        color:cadetblue;
        &:active{
            transform: scale(0.9);
        }
    }
    .service-content{
        font-weight: bold;
    }
    .service-card{
        background-color: rgba(29, 25, 25, 0.567);
        backdrop-filter: blur(10px);
        border: 1px solid gray;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        align-items: center;
        gap:10px;
    }

    .service-image > img{
        height: 50px;
        border-radius: 5px;
    }
</style>
