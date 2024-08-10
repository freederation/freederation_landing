<script lang="ts">
  import { onMount } from 'svelte';

  export let number: number;
  export let content: string;
  export let fontSizeNumber = '1rem';
  export let fontSizeContent = '1rem';

  let cardSize = 0;

  const calculateFontSize = () => {
    const cardElement = document.querySelector('.info-card');
    if (cardElement) {
      cardSize = cardElement.clientWidth;
      fontSizeNumber = `${cardSize / 8}px`;
      fontSizeContent = `${cardSize / 15}px`;
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

<div class="info-card">
  <div class="card-inner">
    <div class="card-content">
      <h3 class="info-card-number" style="font-size: {fontSizeNumber};">{number}</h3>
      <h3 class="info-card-text" style="font-size: {fontSizeContent};">{content}</h3>
    </div>
  </div>
</div>

<style>
  .info-card {
    position: relative;
    background: black;
    color: #fff;
    border-radius: 9px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    transition: all 0.3s ease;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 1 / 1;
  }

  .info-card:hover {
    box-shadow: 0 0 20px rgba(0, 255, 255, 1);
  }

  .info-card .card-inner {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .info-card .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .info-card .info-card-number {
    font-weight: bold;
    color: rgba(0, 255, 255, 1);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    margin: 0;
    font-size: clamp(16px, 2.5vw, 24px);
  }

  .info-card .info-card-text {
    margin: 0;
    text-align: start;
    font-size: clamp(14px, 2vw, 20px);
  }

  @media (max-width: 600px) {
    .info-card {
      width: 100%;
      aspect-ratio: 1 / 1;
      padding: 0.6rem;
    }

    .info-card .card-content {
      align-items: flex-start;
      justify-content: flex-start;
    }

    .info-card .info-card-number {
      top: 0.6rem;
      left: 0.6rem;
    }

    .info-card .info-card-text {
      align-self: flex-end;
      margin-bottom: 0.6rem;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .info-card {
      width: 100%;
      min-width: 150px;
      max-width: 250px;
      aspect-ratio: 1 / 1;
      padding: 0.6rem;
    }

    .info-card .card-content {
      align-items: flex-start;
      justify-content: flex-start;
    }

    .info-card .info-card-number {
      top: 0.6rem;
      left: 0.6rem;
    }

    .info-card .info-card-text {
      align-self: flex-end;
      margin-bottom: 0.6rem;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    .info-card {
      width: 100%;
      min-width: 160px;
      max-width: 200px;
      aspect-ratio: 1 / 1;
      padding: 0.6rem;
    }

    .info-card .card-content {
      align-items: flex-start;
      justify-content: flex-start;
    }

    .info-card .info-card-number {
      top: 0.6rem;
      left: 0.6rem;
    }

    .info-card .info-card-text {
      align-self: flex-end;
      margin-bottom: 0.6rem;
    }
  }

  @media (min-width: 1201px) {
    .info-card {
      width: 100%;
      min-width: 150px;
      aspect-ratio: 1 / 1;
      padding: 0.7rem;
    }
    .info-card .card-content {
      align-items: flex-start;
      justify-content: flex-start;
    }
    .info-card .info-card-number {
      top: 0.6rem;
      left: 0.9rem;
    }
  }
</style>
