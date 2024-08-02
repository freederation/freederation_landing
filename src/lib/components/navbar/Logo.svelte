<script lang="ts">
    export let logoPath: string;
  </script>
  
  <div class="logo">
    <img src={logoPath} alt="Logo" />
  </div>
  
  <style>
    .logo {
      display: flex;
      align-items: center;
    }
    .logo img {
      max-width: 160px;
    }
  </style>
  