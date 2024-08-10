interface TextAttributes {
    text: string;
    highlightedText?: string;
    tag?: string;
    className?: string; 
  }
  
  export interface TitleAttributes extends TextAttributes {}
  export interface SubtitleAttributes extends TextAttributes {}
  
  