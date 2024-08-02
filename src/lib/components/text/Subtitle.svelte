<script lang="ts">
  import type { SubtitleAttributes } from '$lib/types/generic';

  export let text: SubtitleAttributes['text'];
  export let className: SubtitleAttributes['className'] = '';
</script>

<h3 class={className}>
  {text}
</h3>

<style>
  @media (max-width: 600px) {
    h3 {
      margin-bottom: 0.6rem; 
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    h3 {
      margin-bottom: 1rem; 
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    h3 {
      margin-bottom: 1.5rem; 
    }
  }

  @media (min-width: 1201px) {
    h3 {
      margin-bottom: 2rem; 
    }
  }
</style>
