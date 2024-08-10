<script lang="ts">
  import type { AppButtonProps } from '$lib/types/buttons';

  export let label: AppButtonProps['label'];
  export let className: AppButtonProps['className'];
  export let href: AppButtonProps['href'] = '#'; 
</script>

{#if href}
  <a href={href} class="button-app {className}">
    <span>{label}</span>
  </a>
{:else}
  <button class="button-app {className}">
    <span>{label}</span>
  </button>
{/if}

<style>
  .button-app {
    align-items: center;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    border: 0;
    border-radius: 50%;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 1.5rem;
    justify-content: center;
    line-height: 1em;
    max-width: 60px;
    max-height: 60px;
    padding: 10px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
  }

  .button-app:active,
  .button-app:hover {
    outline: 0;
  }

  .button-app span {
    background-color: rgb(5, 6, 45);
    padding: 10px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-app:hover span {
    background: none;
  }
  @media (max-width: 600px) {
    .button-app {
      font-size: 1.25rem;
      max-width: 50px;
      max-height: 50px;
      padding: 8px;
    }
  }
  @media (min-width: 601px) and (max-width: 900px) {
    .button-app {
      font-size: 1.5rem;
      max-width: 60px;
      max-height: 60px;
      padding: 10px;
    }
  }
  @media (min-width: 901px) and (max-width: 1200px) {
    .button-app {
      font-size: 1.75rem;
      max-width: 70px;
      max-height: 70px;
      padding: 12px;
    }
  }
  @media (min-width: 1201px) {
    .button-app {
      font-size: 2rem;
      max-width: 80px;
      max-height: 80px;
      padding: 14px;
    }
  }
</style>
