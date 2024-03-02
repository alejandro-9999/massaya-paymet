<script>
    import Product from "./Product.svelte";

    export const products = [
    {
        name: "Jasmin Sour",
        price: 40,
        image: "../../assets/products/product1.jpeg",
    },
    {
        name: "Strawberry Savor",
        price: 35,
        image: "../../assets/products/product2.jpeg",
    },
    {
        name: "Lime Flavor",
        price: 30,
        image: "../../assets/products/product3.jpeg",
    },
    {
        name: "Pineapple Soul",
        price: 30,
        image: "../../assets/products/product4.jpeg",
    },
];
</script>

<div class="products-panel">
    <h3>Do you want to add a product?</h3>
    <div class="products-tab">
        {#each products as product}
            <Product {product}/>
        {/each}        
    </div>
</div>

<style>
    .products-panel{
        margin-top: 60px;
        display: block;
        justify-content: center;
        text-align: center;
    }
    .products-tab {
        display: flex;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
    }
</style>
