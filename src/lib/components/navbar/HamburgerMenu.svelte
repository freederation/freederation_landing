<script lang="ts">
  export let toggleMenu: () => void;
  export let handleKeyDown: (event: KeyboardEvent) => void;
</script>

<button class="hamburger-menu" on:click={toggleMenu} on:keydown={handleKeyDown} aria-label="Toggle menu">
  <span></span>
  <span></span>
  <span></span>
</button>

<style>
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  .hamburger-menu span {
    height: 4px;
    width: 25px;
    background: white;
    margin: 4px;
    transition: all 0.3s ease;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .hamburger-menu span {
      height: 7px;
      width: 35px;
    }
  }

  @media (min-width: 901px) {
    .hamburger-menu {
      display: none;
    }
  }
</style>
