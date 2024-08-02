<script lang="ts">
    export let tokenName: string;
    export let tokenDescription: string;
    export let expanded: boolean;
    export let onToggle: () => void;
  
    function handleClick() {
      onToggle();
    }
  </script>
  
  <div class="token-item">
    <button class="token-question" on:click={handleClick} class:active={expanded}>{tokenName}</button>
    {#if expanded}
      <div class="token-answer">{tokenDescription}</div>
    {/if}
  </div>
  
  <style>
    .token-item {
      background: #111;
      border-radius: 15px;
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
      margin-bottom: 10px;
      overflow: hidden;
      transition: all 0.3s ease;
    }
  
    .token-question {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.5rem;
      padding: 15px;
      text-align: left;
      width: 100%;
      cursor: pointer;
      outline: none;
      transition: background 0.3s ease;
    }
  
    .token-question:hover {
      background: rgba(0, 255, 255, 0.2);
    }
  
    .token-answer {
      background: #222;
      border-top: 1px solid rgba(0, 255, 255, 0.5);
      padding: 15px;
      font-size: 1.2rem;
      color: #fff;
    }
  
    .token-question::after {
      content: '\002B';
      font-size: 1.5rem;
      float: right;
    }
  
    .token-question.active::after {
      content: '\2212';
    }
  </style>
  