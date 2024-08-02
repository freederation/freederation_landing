<script lang="ts">
  import DropdownButton from '$lib/components/buttons/DropdownButton.svelte';
  import type { TokenType } from '$lib/types/generic';
  import { writable } from 'svelte/store';
  import type { Writable } from 'svelte/store';

  export let category: string;
  export let tokens: TokenType[];

  type ExpandedItems = Record<string, number | null>;
  let expandedItems: Writable<ExpandedItems> = writable({});

  function handleToggle(index: number) {
    expandedItems.update(current => {
      const newState: ExpandedItems = { ...current };
      if (newState[category] === index) {
        newState[category] = null;
      } else {
        newState[category] = index;
      }
      return newState;
    });
  }
</script>

<article class="token-category" id={category}>
  <header>
    <h2 class="category-title">{category}</h2>
  </header>
  {#each tokens as token, index (index)}
    {#key index}
      <DropdownButton 
        tokenName={token.name} 
        tokenDescription={token.description}
        expanded={$expandedItems[category] === index}
        onToggle={() => handleToggle(index)} 
      />
    {/key}
  {/each}
</article>

<style>
  .token-category {
    flex: 1 1 30%;
    max-width: 30%;
    min-width: 250px;
    box-sizing: border-box;
    margin: 10px;
  }

  .category-title {
    font-size: 2rem;
    margin-bottom: 1.5em;
    border-bottom: 1px solid rgba(0, 255, 255, 0.5);
  }

  @media (max-width: 992px) {
    .token-category {
      flex: 1 1 45%;
      max-width: 45%;
    }
  }

  @media (max-width: 768px) {
    .token-category {
      max-width: 100%;
      margin-bottom: 1rem;
    }
  }
</style>
