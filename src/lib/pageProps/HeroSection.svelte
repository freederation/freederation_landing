<script lang="ts">
  import Title from '$lib/components/text/Title.svelte';
  import Subtitle from '$lib/components/text/Subtitle.svelte';  
  import GeneralButton from '$lib/components/buttons/GeneralButton.svelte';
  import type { HeroSectionProps } from '$lib/types/typeProps';

  export let title: HeroSectionProps['title'];
  export let subtitle: HeroSectionProps['subtitle'];
  export let buttons: HeroSectionProps['buttons'];
</script>


<div class="section" id="hero-section">
  <div class="hero-container">
    <div class="hero-content">
      <Title 
        text={title.text} 
        highlightedText={title.highlightedText} 
        highlightColor="#009688" 
        className="title-hero-section" 
      />
      <Subtitle text={subtitle.text} className="subtitle-hero-section" />
      <div class="buttons">
        {#each buttons as button}
          <GeneralButton label={button.label} href={button.href} className="neon-glow"  />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .section {
    margin-top: 4rem;
  }

  .hero-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
  }

  .hero-content {
    flex: 1;
    text-align: center;
    padding: 1rem;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

  }

  @media (max-width: 600px) {
    .buttons {
      flex-direction: column;
      gap: 1rem;
      max-width: 150px;
      margin-top: 3rem;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .buttons {
      flex-direction: row;
      gap: 2rem;
      max-width: 500px;
      
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    .buttons {
      flex-direction: row;
      gap: 2rem;
      max-width: 600px;
      
    }
  }

  @media (min-width: 1201px) {
    .buttons {
      flex-direction: row;
      gap: 3rem;
      max-width: 600px;
      
    }
    :global(.subtitle-hero-section) {
      max-width: 600px;
      
    }
  }
</style>
