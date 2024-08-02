<script lang="ts">
  import type { Button } from "$lib/types/generic";
  
  export let label: Button['label'];
  export let onClick: Button['action'];
  export let className: Button['className'] = ''; 
  export let id: Button['id'] = '';
</script>

<button id={id} class={`button-general ${className}`} on:click={onClick}>
  {label}
</button>

<style>
  .button-general {
    cursor: pointer;
    padding: 15px 30px; 
    font-size: 18px; 
    font-weight: bold; 
    color: #fff;
    background-color: #111;
    border: none;
    border-radius: 25px; 
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    flex: 1; 
  }

  .neon-glow {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  .neon-glow:hover {
    box-shadow: 0 0 20px rgba(0, 255, 255, 1);
  }

  .neon-glow:focus {
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 255, 255, 1);
    }
    100% {
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
  }

  @media (max-width: 600px) {
    .button-general {
      padding: 10px 20px;
      font-size: 16px;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .button-general {
      padding: 12px 24px;
      font-size: 17px;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    .button-general {
      padding: 14px 28px;
      font-size: 18px;
    }
  }

  @media (min-width: 1201px) {
    .button-general {
      padding: 15px 30px;
      font-size: 18px;
    }
  }
</style>
