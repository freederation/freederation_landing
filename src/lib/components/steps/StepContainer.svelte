<script lang="ts">
  import Image from '$lib/components/images/Image.svelte';

  export let heading: string;
  export let description: string;
  export let imgSrc: string;
  export let imgAlt: string;
  export let reverse: boolean = false;
</script>

<div class="star-planet-island-content">
  <section class="step-container {reverse ? 'row-reverse' : ''}">
    <div class="text-content">
      <h2 class="how-it-works-heading">{heading}</h2>
      <p class="how-it-works-description">{description}</p>
    </div>
    <Image src={imgSrc} alt={imgAlt} className="step-image" />
  </section>
</div>

<style>
  .step-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  .how-it-works-heading {
    border-bottom: 1.5px solid #ccfa04;
  }

  .step-container.row-reverse {
    flex-direction: row-reverse;
  }

  :global(.step-image) {
    max-width: 450px;
    max-height: 450px;
  }

  @media (max-width: 600px) {
    :global(.step-image) {
      max-width: 350px;
    }
  }

  @media (max-width: 900px) {
    .step-container {
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
  }

  .step-container.row-reverse {
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
  }

  .text-content {
    text-align: center;
    max-width: 100%;
  }
  }

  .how-it-works-description {
    margin-top: 7%;
    margin-bottom: 7%;
  }

  .how-it-works-heading {
    margin-top: 7%;
    
  }

  @media (min-width: 901px) {
    .step-container {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .step-container.row-reverse {
      flex-direction: row-reverse;
    }

    .text-content {
      flex: 0 0 55%;
      text-align: left;
    }

    :global(.step-image) {
      flex: 0 0 25%;
      max-width: 400px;
    }
  }
</style>
