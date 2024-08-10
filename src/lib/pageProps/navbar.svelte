<script lang="ts">
  import type { NavbarProps } from '$lib/types/typeProps';
  import Logo from '$lib/components/images/Logo.svelte';
  import NavLinks from '$lib/components/navbar/NavLinks.svelte';
  import HamburgerMenu from '$lib/components/navbar/HamburgerMenu.svelte';
  
  export let logo: NavbarProps['logo'];
  export let links: NavbarProps['links'] = [];
  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  }
</script>

<nav class="navbar">
  <Logo {logo} />
  <HamburgerMenu {toggleMenu} {handleKeyDown} />
  <NavLinks {links} {showMenu} ulClass="nav-links-navbar" linkClass="link-navbar" />
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(51, 51, 51, 0.8);
    padding: 0 1rem;
    box-sizing: border-box;
    position: relative;
    z-index: 1000;
  }

  @media (max-width: 600px) {
    .navbar {
      height: 80px;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .navbar {
      height: 120px;
    }
  }

  @media (min-width: 901px) {
    .navbar {
      height: 150px;
      padding: 0 3rem;
    }
  }
</style>
