<script lang="ts">
  import Title from '$lib/components/text/Title.svelte';
  import Subtitle from '$lib/components/text/Subtitle.svelte';
  import TokenCategory from '$lib/components/tokens/TokenCategory.svelte';
  import type { TokenDictionaryProps } from '$lib/types/typeProps';

  export let title: TokenDictionaryProps['title'];
  export let subtitle: TokenDictionaryProps['subtitle'];
  export let tokens: TokenDictionaryProps['tokens'];

  const categories = Array.from(new Set(tokens.map(token => token.category)));
</script>

<section id="token-dictionary" class="section">
  <div class="container">
    <Title text={title.text} className="title-token-dictionary" />
    <Subtitle text={subtitle.text} className="subtitle-token-dictionary" />

    <div class="category-wrapper">
      {#each categories as category}
        <TokenCategory 
          category={category} 
          tokens={tokens.filter(token => token.category === category)} 
        />
      {/each}
    </div>
  </div>
</section>
<style>
  #token-dictionary {
    text-align: center;
    padding: 20px;
    position: relative;
  }

  .category-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  

  @media (max-width: 992px) {

  }

  @media (max-width: 768px) {
    .category-wrapper {
      flex-direction: column;
      align-items: center;
    }


  }
</style>
