<script>
    import Header from "../components/Header.svelte";
    export const prerender = true;
</script>

<div class="background"></div>
<div class="overlay"></div>
<div class="content">
    <Header />
    <slot><!-- optional fallback --></slot>
</div>

<style global>
    .background {
        background: url("../assets/background.webp") center/cover no-repeat;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
        will-change: transform;
        /* Para enviar la imagen de fondo detrás del contenido */
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        /* Color semitransparente para oscurecer */
    }

    .content {
        margin-top: 5px;
        padding: 20px;
        color: white;
        overflow-y: auto;
        position: relative;
        /* Asegura que el contenido aparezca sobre la capa overlay */
        z-index: 1;
        /* Para asegurar que el contenido esté sobre la imagen de fondo */
    }
</style>
