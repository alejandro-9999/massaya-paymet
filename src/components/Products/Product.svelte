<script>
    // @ts-ignore
    export let product;
    let amount = 0;

    const addElement = () => {
        amount += 1;
    };

    const removeElement = () => {
        if (amount > 0) amount -= 1;
    };
</script>

<div class="product-item">
    <div class="product-card">
        <div class="image-container">
            <img src={product.image} alt="product" />
        </div>
        <div class="span-value">
            <span>${product.price}</span>
        </div>
    </div>
    <div class="product-counter">
        <button class="add-element" on:click={()=>removeElement()}>-</button>
        {amount}
        <button class="add-element" on:click={()=>addElement()}>+</button>

    </div>
</div>

<style>

    .product-counter{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        gap:5px;
        align-items: center;
    }

    .product-counter > button{
        font-weight: bold;
        border: 1px solid gray;
        border-radius: 5px;
        background-color: rgba(29, 25, 25, 0.567);
        color: #fff;
        width: 20px;
    }

    .span-value {
        font-size: 1rem;
        font-weight: bold;
        margin-top: 5px;
    }
    .product-card {
        border: 1px solid gray;
        border-radius: 5px;
        background-color: rgba(29, 25, 25, 0.567);
        width: 4em;
        height: 5em;
        padding: 10px;
    }
    .image-container {
        border-radius: 5px;
        width: 60px;
        height: 60px;
    }

    .image-container img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
