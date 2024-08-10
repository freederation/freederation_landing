export interface Link {
    href: string;
    text: string;
    className?: string; 
    icon?: string;
    target?: string;
  }
  
  export interface NavLink extends Link {}
  export interface QuickLink extends Link {}
  