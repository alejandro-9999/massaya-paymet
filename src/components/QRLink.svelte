<!-- QRCode.svelte -->
<script>
    import { onMount } from 'svelte';
    import QRCode from 'qrcode-generator';
  
    // @ts-ignore
    let canvas;
  
    onMount(() => {
      const qr = QRCode(0, 'L'); // Tipo 0 para QR Code y nivel de corrección 'L'
      qr.addData('sample text');
      qr.make();
  
      // @ts-ignore
      const ctx = canvas.getContext('2d');
      const cellSize = 2;
      const margin = 10;
  
      for (let r = 0; r < qr.getModuleCount(); r++) {
        for (let c = 0; c < qr.getModuleCount(); c++) {
          ctx.fillStyle = qr.isDark(r, c) ? 'black' : 'white';
          ctx.fillRect((c * cellSize) + margin, (r * cellSize) + margin, cellSize, cellSize);
        }
      }
    });
  </script>
  
  <canvas bind:this={canvas}></canvas>
  