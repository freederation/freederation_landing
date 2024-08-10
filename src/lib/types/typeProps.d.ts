import type { TitleAttributes, SubtitleAttributes, TextAttributes } from './texts';
import type { Button, AppButtonProps } from './buttons';
import type { NavLink, QuickLink } from './links';
import type { FlipCard, Card } from './cards';
import type IntroFreederation from '$lib/pageProps/IntroFreederation.svelte';
import type Title from '$lib/components/text/Title.svelte';
export interface NavbarProps {
  logo: Logo;
  links: NavLink[];
}

export interface IntroFreederation {
  title: TitleAttributes;
  text: TextAttributes;
  svgPath: string;
  buttons: Button[];
}
export interface HeroSectionProps {
  title: TitleAttributes;
  subtitle: SubtitleAttributes;
  buttons: Button[];
}

export interface ProblemToSolveProps {
  title: TitleAttributes;
  subtitle: SubtitleAttributes;
  svgPath: string;
  cards: FlipCard[];
}

export interface HowItWorksProps {
  title: TitleAttributes;
  subtitle: SubtitleAttributes;
  steps: HowItWorksStep[];
}

export interface AboutFreederationProps {
  title: TitleAttributes;
  subtitle: SubtitleAttributes;
  svgPath: string;
  cards: Card[];
}

export interface TokenDictionaryProps {
  title: TitleAttributes;
  subtitle: SubtitleAttributes;
  tokens: TokenType[];
}

export interface FooterProps {
  ctaTitle: string;
  ctaText: string;
  quickLinks: QuickLink[];
  socialLinks: SocialLink[];
  contactEmail: string;
}
