<script lang="ts">
  import { onMount } from 'svelte';

  export let frontFace: string;
  export let backFace: string;
  export let fontSizeFront = '1rem';
  export let fontSizeBack = '1rem';

  let cardSize = 0;

  const calculateFontSize = () => {
    const cardElement = document.querySelector('.flip-card');
    if (cardElement) {
      cardSize = cardElement.clientWidth;
      fontSizeFront = `${cardSize / 10}px`;
      fontSizeBack = `${cardSize / 12}px`;
    }
  };

  onMount(() => {
    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  });
</script>

<div class="flip-card">
  <div class="card-inner">
    <div class="card-front">
      <h2 style="font-size: {fontSizeFront};">{frontFace}</h2>
    </div>
    <div class="card-back">
      <h3 style="font-size: {fontSizeBack};">{backFace}</h3>
    </div>
  </div>
</div>

<style>
  .flip-card {
    position: relative;
    background: black;
    color: #fff;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    transition: all 0.3s ease;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 1 / 1;
    perspective: 1000px;
  }

  .flip-card:hover {
    box-shadow: 0 0 20px rgba(0, 255, 255, 1);
  }

  .flip-card .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .flip-card .card-front, .flip-card .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    padding: 10px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flip-card .card-front {
    background: #111;
  }

  .flip-card .card-back {
    background: #333;
    color: #fff;
    transform: rotateY(180deg);
  }

  .flip-card .card-front h2, .flip-card .card-back h3 {
    margin: 0;
  }

  @media (max-width: 600px) {
    .flip-card {
      min-width: 130px;
      max-width: 150px;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .flip-card {
      min-width: 150px;
      max-width: 200px;
    }
  }
  @media (min-width: 901px) and (max-width: 1200px) {
    .flip-card {
      min-width: 160px;
      max-width: 180px;
    }
  }
</style>
