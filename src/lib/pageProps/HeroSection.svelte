<script lang="ts">
  import type { HeroSectionProps } from '$lib/types/typeProps';
  import GeneralButton from '$lib/components/buttons/GeneralButton.svelte';
  import Title from '$lib/components/text/Title.svelte';
  import Subtitle from '$lib/components/text/Subtitle.svelte';

  export let title: HeroSectionProps['title'];
  export let subtitle: HeroSectionProps['subtitle'];
  export let buttons: HeroSectionProps['buttons'];
</script>

<section id="hero-section" class="section">
  <Title text={title.text} className="title-hero-section" />
  <Subtitle text={subtitle.text} className="subtitle-hero-section" />
  <div class="buttons-hero-section">
    {#each buttons as button, index}
      <GeneralButton 
        label={button.label} 
        onClick={button.action} 
        className="neon-glow" 
        id={`hero-section-button-${index}`
      } />
    {/each}
  </div>
</section>

<style>
  #hero-section {
    position: relative;
    z-index: 2;
  }

  .buttons-hero-section {
    display: flex;
    justify-content: center;
    margin: 0 auto
  }


  @media (max-width: 600px) {
    .buttons-hero-section {
      margin-top: 2rem;
      gap: 1rem;
      max-width: 400px;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    :global(.title-hero-section) {
      margin-top: 8vh;
    }
    .buttons-hero-section {
      margin-top: 2.3rem;
      gap: 1rem;
      max-width: 500px;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    :global(.title-hero-section) {
      margin-top: 8vh;
    }
    .buttons-hero-section {
      margin-top: 2.3rem;
      gap: 1rem;
      max-width: 500px;
    }
  }

  @media (min-width: 1201px) {
   
  }
</style>
