<script lang="ts">
  import type { Button } from "$lib/types/buttons";
  
  export let label: Button['label'];
  export let href: Button['href'];
  export let className: Button['className'] = ''; 
  export let id: Button['id'] = '';
</script>

<a id={id} class={`button-modern ${className}`} href={href}>
  <span>{label}</span>
</a>

<style>
  .button-modern {
    cursor: pointer;
    padding: 15px 30px; 
    font-size: 18px; 
    font-weight: bold; 
    color: #fff;
    background-color: transparent;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: relative;
    overflow: hidden;
    border-image: linear-gradient(45deg, #40c9ff, #e81cff) 1;
  }

  .button-modern::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #40c9ff, #e81cff);
    transition: transform 0.5s ease;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
  }

  .button-modern:hover::before {
    transform: scaleX(1);
  }

  .button-modern:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .button-modern span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 600px) {
    .button-modern {
      padding: 10px 20px;
      font-size: 16px;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .button-modern {
      padding: 12px 24px;
      font-size: 17px;
    }
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    .button-modern {
      padding: 14px 28px;
      font-size: 18px;
    }
  }

  @media (min-width: 1201px) {
    .button-modern {
      padding: 15px 30px;
      font-size: 18px;
    }
  }
</style>
