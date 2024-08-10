<script lang="ts">
  import Navbar from '$lib/pageProps/navbar.svelte';
  import IntroFreederation from '$lib/pageProps/IntroFreederation.svelte';
  import HeroSection from '$lib/pageProps/HeroSection.svelte';
  import ProblemToSolve from '$lib/pageProps/ProblemToSolve.svelte';
  import HowItWorks from '$lib/pageProps/HowItWorks.svelte';
  import AboutFreederation from '$lib/pageProps/AboutFreederation.svelte';
  import TokenDictionary from '$lib/pageProps/TokenDictionary.svelte';
  import Footer from '$lib/pageProps/Footer.svelte';
  
  import { navbarData, introFreederationData, heroSectionData, problemToSolveData, howItWorksData, aboutFreederationData, tokenDictionaryData, footerData } from '$lib/landingPageData';
</script>

<Navbar {...navbarData} />
<IntroFreederation {...introFreederationData} />
<HeroSection {...heroSectionData} />
<ProblemToSolve {...problemToSolveData} />
<HowItWorks {...howItWorksData} />
<AboutFreederation {...aboutFreederationData} />
<TokenDictionary {...tokenDictionaryData} />
<Footer {...footerData} />
