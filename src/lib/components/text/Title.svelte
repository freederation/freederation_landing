<script lang="ts">
  import type { TitleAttributes } from '$lib/types/texts';

  export let text: TitleAttributes['text'];
  export let highlightedText: TitleAttributes['highlightedText'] = '';
  export let className: TitleAttributes['className'] = '';
  export let highlightColor: string = '#e81cff'; 
</script>

<h1 class={className}>
  {text} <span class="highlight" style="color: {highlightColor};">{highlightedText}</span>
</h1>

<style>
  @media (max-width: 600px) {
    h1 {
      margin-bottom: 0.6rem; 
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    h1 {
      margin-bottom: 1rem; 
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    h1 {
      margin-bottom: 1.5rem; 
    }
  }

  @media (min-width: 1201px) {
    h1 {
      margin-bottom: 2rem; 
    }
  }
</style>
