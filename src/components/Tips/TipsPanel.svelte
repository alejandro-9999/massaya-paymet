<script>
    import TipItem from "./TipItem.svelte";

    let tips_options = [0, 10, 15, 20];
</script>

<div class="tips-panel">
    <h4>Support staff service and give a tip!</h4>
    <div class="tips-options">
        {#each tips_options as tip}
            <TipItem percentage={tip}/>
        {/each}
    </div>
    <div class="other-amount">
        <input class="other-amount-input" type="text" placeholder="Other amount $"/>
    </div>
</div>

<style>
    .other-amount-input {
        box-sizing: border-box;
        text-align: center;
        margin-top: 10px;
        border: 1px solid gray;
        border-radius: 5px;
        background-color: rgba(29, 25, 25, 0.567);
        backdrop-filter: blur(10px);
        color: #fff;
        height: 2rem;
    }
    .tips-options{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .tips-panel {
        display: block;
        text-align: center;
        justify-content: center;
    }
</style>
