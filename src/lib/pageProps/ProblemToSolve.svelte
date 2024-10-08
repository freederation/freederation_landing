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
</script>

<section id="problem-to-solve" class="section">
  <Title text={title.text} className="title-problem-to-solve" />
  <Subtitle text={subtitle.text} className="subtitle-problem-to-solve" />
  <div class="content-problem-to-solve">
    <div class="svg-container">
      <Image src={svgPath} alt="Illustration" className="svg-diagram-problem-to-solve" />
    </div>
    <div class="cards-section">
      {#each cards as card}
        <FlipCard frontFace={card.frontFace || ''} backFace={card.backFace || ''} />
      {/each}
    </div>
  </div>
</section>

<style>
  .content-problem-to-solve {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .svg-container {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  :global(.svg-diagram-problem-to-solve) {
    margin-bottom: 2rem;
    margin-top: 1.2rem;
    width: 100%;
  }

  .cards-section {
    display: grid;
    gap: 16px; 
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
  }

  @media (max-width: 600px) {
    .cards-section {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);
    }
    .svg-container {
      justify-content: center;
      margin-bottom: 2rem;
      max-width: 400px;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .cards-section {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
    
    }

    .svg-container {
      justify-content: center;
      margin-bottom: 2rem;
      max-width: 450px;
    }

    :global(.svg-diagram-problem-to-solve) {
      margin-bottom: 2rem;
      max-width: 550px;
      margin: 0 auto;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
  .content-problem-to-solve {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 5rem;
  }

  .svg-container {
    flex: 1 1 auto; 
    max-width: 500px; 
    min-width: 300px; 
  }

  .cards-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
   
    flex: 1 1 auto; 
    min-width: 300px; 
    max-width: 400px; 
  }

  :global(.svg-diagram-problem-to-solve) {
    width: 100%;
  }
  :global(.subtitle-problem-to-solve) {
    max-width: 700px;
  }
}


@media (min-width: 1201px) {
  .content-problem-to-solve {
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-between;
    padding: 0 5%; 
    gap: 5rem;

    margin: 0 auto; 
  }

  .svg-container {
    flex: 1 1 50%; 
    min-width: 400px;
    max-width: 600px;
    display: flex;
    justify-content: flex-start; 
  }

  .cards-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(2, auto); 
    gap: 16px; 
    flex: 1 1 50%; 
    max-width: 600px; 
    justify-content: flex-end; 
  }

  :global(.svg-diagram-problem-to-solve) {
    margin-bottom: 0;
    width: 100%;
  }
  :global(.subtitle-problem-to-solve) {
    max-width: 700px;
  }
}

</style>
