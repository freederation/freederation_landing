<script lang="ts">
  import FlipCard from '$lib/components/cards/FlipCard.svelte';
  import InfoCard from '$lib/components/cards/InfoCard.svelte';
  
  export let cards: { frontFace?: string; backFace?: string; number?: number; content?: string }[];
  export let cardType: 'FlipCard' | 'InfoCard';
</script>

<div class="cards-section">
  {#each cards as card}
    {#if cardType === 'FlipCard'}
      <FlipCard frontFace={card.frontFace || ''} backFace={card.backFace || ''} />
    {:else if cardType === 'InfoCard'}
      <InfoCard number={card.number || 0} content={card.content || ''} />
    {/if}
  {/each}
</div>

<style>
  @media (max-width: 600px) {
    .cards-section {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    :global(#how_it_works.section) {
      padding-bottom: 25px;
    }
    .cards-section {
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      gap: 1rem; 
      justify-content: center;
    }
}


  @media (min-width: 901px) and (max-width: 1200px) {

  }

  @media (min-width: 1201px) {
    .cards-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
</style>
