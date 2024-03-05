<!-- Input.svelte -->
<script>
    // @ts-nocheck

    export let value = "";

    function handleChange(event) {
        value = event.target.value;
        // Emit an event to notify the parent component of the value change
        dispatch("change", value);
    }
</script>


<div class="input-container">
    <input class="input" type="text" bind:value on:input={handleChange} />
</div>

<style>
    .input{
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        margin-top: 10px;
        border: 1px solid gray;
        border-radius: 10px;
        background-color: rgba(29, 25, 25, 0.567);
        backdrop-filter: blur(10px);
        color: #fff;
        box-sizing: border-box;
    }
</style>