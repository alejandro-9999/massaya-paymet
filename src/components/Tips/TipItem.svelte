<script>
    // @ts-ignore
    export let percentage;
</script>
<div class="tip-item">
    {percentage}%
</div>
<style>
    .tip-item{
        cursor: pointer;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 5px;
        background-color: rgba(29, 25, 25, 0.567);
        width: 3em;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        

        &:hover {
            background-color: #1d191999;
            /* Cambia el color de fondo al pasar el ratón */
        }

        &:focus {
            outline: none;
            /* Elimina el contorno predeterminado en el foco */
            box-shadow: 0 0 0 3px rgba(29, 25, 25, 0.4);
            /* Agrega un contorno al enfocar */
        }

        &:active {
            transform: scale(0.95);
            /* Reduzca ligeramente el tamaño al hacer clic */
        }
    }

</style>
