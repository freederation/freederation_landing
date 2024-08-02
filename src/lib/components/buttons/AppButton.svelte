<script lang="ts">
  import type { AppButtonProps } from '$lib/types/generic';

  export let label: AppButtonProps['label'];
  export let onClick: AppButtonProps['onClick'];
  export let className: AppButtonProps['class'];
</script>

<button class="button-app {className}" on:click={onClick}>
  <span>{label}</span>
</button>

<style>
  button {
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 5px;
    background: #00ffff;
    color: #111;
    text-decoration: none;
    transition: background 0.3s ease, color 0.3s ease;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #00cccc;
    color: #fff;
  }

  .button-app {
    align-items: center;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
    border: 0;
    border-radius: 50%;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    justify-content: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
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
