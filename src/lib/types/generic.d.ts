interface TextAttributes {
  text: string;
  tag?: string;
  className?: string; 
}

export interface TitleAttributes extends TextAttributes {}
export interface SubtitleAttributes extends TextAttributes {}

export interface SubtitleProps extends TitleProps {}

export interface Link {
  href: string;
  text: string;
  className?: string; 
  icon?: string;
  target?: string;
}

export interface Button {
  label: string;
  action: () => void;
  className?: string; 
  id?: string;
}

export interface FlipCard {
  frontFace: string;
  backFace: string;
}

export interface Card {
  number?: number;
  content: string;
}

export interface ImageAttributes {
  src: string;
  alt: string;
  className?: string; 
}

export interface HowItWorksStep {
  heading: string;
  description: string;
  img: Image;
}

export interface TokenType {
  name: string;
  description: string;
  category: string;
}

export interface TitleProps extends TextProps {}
export interface SubtitleProps extends TextProps {}
export interface NavLink extends Link {}
export interface QuickLink extends Link {}
export interface Logo extends ImageAttributes {}

export interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

export interface AppButtonProps {
  label: string;
  onClick: () => void;
  className?: string; 
}
