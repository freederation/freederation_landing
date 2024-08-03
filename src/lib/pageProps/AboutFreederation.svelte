<script lang="ts">
  import Title from '$lib/components/text/Title.svelte';
  import Subtitle from '$lib/components/text/Subtitle.svelte';
  import Image from '$lib/components/images/Image.svelte';
  import InfoCard from '$lib/components/cards/InfoCard.svelte';
  import type { AboutFreederationProps } from '$lib/types/typeProps';

  export let title: AboutFreederationProps['title'];
  export let subtitle: AboutFreederationProps['subtitle'];
  export let svgPath: AboutFreederationProps['svgPath'];
  export let cards: AboutFreederationProps['cards'];
</script>

<section id="about_freederation" class="section">
  <div class="introduction-container">
    <Title text={title.text} className="title-about-freederation" />
    <Subtitle text={subtitle.text} className="subtitle-about-freederation" />
  </div>
  <div class="information-container">
    <div class="proto-svg-container">
      <Image src={svgPath} alt="Process Diagram" className="svg-about-freederation" />
    </div>
    <div class="cards-section">
      {#each cards as card}
        <InfoCard number={card.number || 0} content={card.content || ''} />
      {/each}
    </div>
  </div>
</section>

<style>
  .introduction-container {
    margin-bottom: 1rem;
  }

  .information-container {
    display: flex;
    flex-direction: column;
  }

  .cards-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, auto); 
    gap: 26px; 
    justify-content: center;
    justify-items: center;
  }

  @media (max-width: 600px) {
    :global(.svg-about-freederation) {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    :global(.svg-about-freederation) {
      margin-bottom: 4rem;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    .information-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 2rem;
    }

    .proto-svg-container {
      flex: 1 1 auto; /* Ajuste flexible del contenedor SVG */
      max-width: 500px;
      min-width: 300px;
    }

    .cards-section {
      flex: 1 1 auto; /* Ajuste flexible del contenedor de tarjetas */
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 2rem;
    }

    :global(.svg-about-freederation) {
      width: 100%;
    }
  }

  @media (min-width: 1201px) {
    .information-container {
      justify-content: center;
    }

    .proto-svg-container {
      flex: 1 0 auto;
      max-width: 460px;
    }

    .cards-section {
      flex: 1 0 auto;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      max-width: 400px;
    }

    :global(.svg-about-freederation) {
      margin-bottom: 0;
      width: 100%;
    }
  }
</style>
