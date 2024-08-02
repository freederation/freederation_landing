import type { Logo, NavLink, Button, FlipCard, HowItWorksStep, Card, TokenType, QuickLink, SocialLink, TitleAttributes, SubtitleAttributes } from './generic';

export interface NavbarProps {
  logo: Logo;
  links: NavLink[];
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
