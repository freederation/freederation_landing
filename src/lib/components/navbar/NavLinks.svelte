<script lang="ts">
  import type { NavLink } from '$lib/types/link';
  import AppButton from '$lib/components/buttons/AppButton.svelte';

  export let links: NavLink[] = [];
  export let showMenu: boolean = false;
  export let linkClass: string = '';
  export let ulClass: string = '';
</script>

<ul class:show={showMenu} class="nav-links {ulClass}">
  {#each links as link}
    {#if link.text !== 'App'}
      <li>
        <a href={link.href} target={link.target || "_self"} class={link.className}>
          {#if link.icon}
            <img src={link.icon} alt={link.text + ' icon'} class="nav-icon"/>
          {/if}
          <span class={linkClass}>{link.text}</span>
        </a>
      </li>
    {:else}
      <li class="app-button-li">
        <AppButton label="App" href="/app" className="additional-class" />
      </li>
    {/if}
  {/each}
</ul>


<style>
  .nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: max-height 0.3s ease;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, #333333, #000000, #000020 95%);
    max-height: 0;
    overflow: hidden;
  }

  .nav-links.show {
    max-height: 300px;
  }

  .nav-links li {
    margin: 1rem 0;
  }

  .nav-links a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #ccfa04;
  }

  .nav-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .app-button-li {
    margin-left: 2rem;
  }

  @media (min-width: 901px) {
    .nav-links {
      flex-direction: row;
      position: relative;
      top: auto;
      left: auto;
      width: auto;
      background: none;
      max-height: none;
    }
    .nav-links li {
      margin-left: 2rem;
    }
  }
</style>
