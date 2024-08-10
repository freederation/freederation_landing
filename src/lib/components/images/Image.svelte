<script lang="ts">
  import type { ImageAttributes } from '$lib/types/generic';

  export let src: ImageAttributes['src'];
  export let alt: ImageAttributes['alt'];
  export let className: string = '';
  export let style: string = '';
</script>

<img src={src} alt={alt} class={className} style={style} />


