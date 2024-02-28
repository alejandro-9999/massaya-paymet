<div class="card-container">
    <div class="card">
        <slot></slot>             
    </div>
</div>


<style>
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
</style>