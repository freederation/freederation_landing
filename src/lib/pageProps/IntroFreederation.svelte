<script lang="ts">
  import Title from '$lib/components/text/Title.svelte';
  import Subtitle from '$lib/components/text/Subtitle.svelte'; 
  import IntroButton from '$lib/components/buttons/IntroButton.svelte';
  import Image from '$lib/components/images/Image.svelte';
  import type { IntroFreederation } from '$lib/types/typeProps';

  export let title: IntroFreederation['title'];
  export let text: IntroFreederation['text'];
  export let svgPath: string;
  export let buttons: IntroFreederation['buttons'];
</script>

<div class="section" id="knowledge-network">
  <div class="intro-container">
    <div class="intro-content">
      <Title text={title.text} highlightedText={title.highlightedText} />
      <Subtitle text={text.text} className="subtitle-intro-section" /> 
      <div class="buttons">
        {#each buttons as button}
          <IntroButton label={button.label} href={button.href} />
        {/each}
      </div>
    </div>
    <div class="intro-jpg">
      <Image src={svgPath} alt="Intro jpg" className="intro-jpg-image" />
    </div>
  </div>
</div>



<style>
  .section {
    margin-top: 4rem;
  }

  .intro-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }

  .intro-content {
    flex: 1;
    padding: 1rem;
  }
  
  .intro-jpg {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  :global(.intro-jpg img) {
    max-width: 100%;
    height: auto;
  }


  .buttons {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    .intro-container {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .intro-content, .intro-jpg {
      max-width: 100%;
    }

    .buttons {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .intro-container {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .intro-content, .intro-jpg {
      max-width: 80%;
    }

    .buttons {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    .intro-container {
      flex-direction: row;
      text-align: left;
      gap: 2rem;
    }

    .intro-content {
      max-width: 60%;
    }

    .intro-jpg {
      max-width: 40%;
    }
  }

  @media (min-width: 1201px) {
    .intro-container {
      flex-direction: row;
      text-align: left;
      gap: 2rem;
    }

    .intro-content {
      max-width: 50%;
    }

    .intro-jpg {
      max-width: 50%;
    }
  }
</style>

