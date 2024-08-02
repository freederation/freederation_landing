<script lang="ts">
  import Title from '$lib/components/text/Title.svelte';
  import Subtitle from '$lib/components/text/Subtitle.svelte';
  import Image from '$lib/components/images/Image.svelte';
  import FlipCard from '$lib/components/cards/FlipCard.svelte';
  import type { ProblemToSolveProps } from '$lib/types/typeProps';

  export let title: ProblemToSolveProps['title'];
  export let subtitle: ProblemToSolveProps['subtitle'];
  export let svgPath: ProblemToSolveProps['svgPath'];
  export let cards: ProblemToSolveProps['cards'];

  console.log('ProblemToSolve svgPath:', svgPath); 
</script>

<section id="problem-to-solve" class="section">
  <Title text={title.text} className="title-problem-to-solve" />
  <Subtitle text={subtitle.text} className="subtitle-problem-to-solve" />
  <div class="content-problem-to-solve">
    <Image src={svgPath} alt="Illustration" className="svg-diagram-problem-to-solve" />
    <div class="cards-section">
      {#each cards as card}
        <FlipCard frontFace={card.frontFace || ''} backFace={card.backFace || ''} />
      {/each}
    </div>
  </div>
</section>

<style>
  :global(.svg-diagram-problem-to-solve) {
    margin-bottom: 2rem;
    margin-top: 1.2rem;
  }

  .cards-section {
    display: grid;
    gap: 16px; /* gap fijo en píxeles */
    grid-template-columns: repeat(2, 1fr); /* Por defecto, 2 columnas */
    justify-content: center;
    justify-items: center;
  }

  @media (max-width: 600px) {
    .cards-section {
      grid-template-columns: repeat(2, 1fr); /* Mantén 2 columnas */
      grid-template-rows: repeat(3, auto); /* 3 filas */
    }
  }

  @media (min-width: 500px) and (max-width: 600px) {
    .cards-section {
      grid-template-columns: repeat(3, 1fr); /* Cambia a 3 columnas en pantallas de 500px */
      grid-template-rows: repeat(2, auto); /* 2 filas */
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .cards-section {
      grid-template-columns: repeat(3, 1fr); /* Cambia a 3 columnas en pantallas más grandes */
      grid-template-rows: repeat(2, auto); /* 2 filas */
    }
    
    .svg-diagram-problem-to-solve {
      margin-bottom: 2rem;
      max-width: 550px;
      display: block; 
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    .svg-diagram-problem-to-solve {
      margin-bottom: 95rem;
    }
  }

  @media (min-width: 1201px) {
    .svg-diagram-problem-to-solve {
      margin-bottom: 85rem;
    }
  }
</style>
