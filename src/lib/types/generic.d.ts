export interface ImageAttributes {
  src: string;
  alt: string;
  className?: string; 
}

export interface TokenType {
  name: string;
  description: string;
  category: string;
}

export interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

export interface LogoAttributes extends ImageAttributes {}