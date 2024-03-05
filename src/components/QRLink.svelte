<script lang="ts">
    // @ts-nocheck
    import QRCode from "qrcode";
    import { onMount } from "svelte";
    import LoadingSpineer from "./LoadingSpinner.svelte";
    export let code;

    let qrCode = "";
    let error = "";

    onMount(() => {
        generateQRCode(code);
    });

    async function generateQRCode(code) {
        try {
            qrCode = await QRCode.toString(code, { type: "svg" });
        } catch (err) {
            const qrCodeError = "Unknown error: Unable to render QR Code.";
        }
    }
</script>

{#if !error}
    {#if qrCode}
        <div class="w-64">
            {@html qrCode}
        </div>
    {:else}
        <div class="w-64 h-64">
            <LoadingSpineer />
        </div>
    {/if}
{:else}
    <p>Unable to render QR Code.</p>
{/if}
