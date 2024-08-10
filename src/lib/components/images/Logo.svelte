<script lang="ts">
    import type { LogoAttributes } from '$lib/types/generic';
  
    export let logo: LogoAttributes;
    export let className: string = '';
  </script>
  
  <div class="logo">
    <img src={logo.src} alt={logo.alt} class={className} />
  </div>
  
  <style>
    .logo {
      display: flex;
      align-items: center;
    }

    @media (max-width: 600px) {
      .logo img {
        max-width: 85px; 
      }
    }

    @media (min-width: 601px) and (max-width: 900px) {
      .logo img {
        max-width: 120px; 
      }
    }
  
    @media (min-width: 900px) {
        .logo img {
          max-width: 140px; 
        }
    }
  </style>
  