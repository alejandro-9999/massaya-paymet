<script>
    // @ts-nocheck

    let buttonProps = {
        class: [$$restProps.class],
    };
</script>

<button
    on:click
    on:focus
    on:mouseover
    on:mouseenter
    on:mouseleave
    {...buttonProps}
>
    <slot />
</button>

<style>
    .dark {
        border: 1px solid gray;
        border-radius: 5px;
        background-color: rgba(29, 25, 25, 0.567);
        backdrop-filter: blur(10px);
        color: #fff;
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.3s ease;
        padding: 10px;
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

    .md {
        font-size: 1em;
    }

    .sm {
        font-size: 1em;
        padding: 0.1em;
    }
    .lg {
        font-size: 2em;
    }
</style>
