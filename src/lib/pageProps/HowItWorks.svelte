<script lang="ts">
  import type { HowItWorksProps } from '$lib/types/typeProps';
  import Title from '$lib/components/text/Title.svelte';
  import Subtitle from '$lib/components/text/Subtitle.svelte';
  import StepContainer from '$lib/components/steps/StepContainer.svelte';

  export let title: HowItWorksProps['title'];
  export let subtitle: HowItWorksProps['subtitle'];
  export let steps: HowItWorksProps['steps'];
</script>

<section id="how_it_works" class="section">
  <div class="how-works-title-container">
    <Title text={title.text} className="title-how-it-works" />
    <Subtitle text={subtitle.text} className="subtitle-how-it-works" />
  </div>

  {#each steps as step, index (step.heading)}
    <StepContainer 
      heading={step.heading} 
      description={step.description} 
      imgSrc={step.img.src} 
      imgAlt={step.img.alt} 
      reverse={index % 2 === 1}  
    />
  {/each}
</section>

<style>
.how-works-title-container, :global(.step-container) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px; 
  margin-bottom: 2rem; 
  text-align: center; 
}

:global(.title-how-it-works, .subtitle-how-it-works, .how-it-works-heading, .how-it-works-description) {
  margin: 0;
}

#how_it_works.section {
  background: linear-gradient(
    to bottom,
    #4a4a4a 0%,    
    #383838 20%,   
    #2a2a2a 40%,   
    #383838 60%,   
    #4a4a4a 80%,   
    #5c5c5c 100%   
  );
  border-radius: 40px;
}

@media (max-width: 600px) {
  #how_it_works.section {
    width: 100%;
  }
  .how-works-title-container, :global(.step-container) {
    max-width: 90%;
    margin: 0 auto;
  }

  :global(.title-how-it-works) {
    margin-top: 10%;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  #how_it_works.section {
    border-radius: 50px;
  }

  :global(.title-how-it-works) {
    margin-top: 15%;
  }

}

@media (min-width: 1201px) {
  #how_it_works.section {
    border-radius: 90px;
  }
}

</style>
