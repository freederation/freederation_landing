<script lang="ts">
  import type { ImageAttributes } from '$lib/types/generic';

  export let src: ImageAttributes['src'];
  export let alt: ImageAttributes['alt'];
  export let className: string = '';
  export let style: string = '';

  console.log('Image className:', className); // Verificar que la clase se está pasando correctamente
</script>

<img src={src} alt={alt} class={className} style={style} />

<style>
  /* Puedes agregar estilos adicionales aquí si es necesario */
</style>
