import type { TokenDictionaryProps } from '$lib/types/typeProps';

export const tokenDictionaryData: TokenDictionaryProps = {
  title: { text: "Token Dictionary" },
  subtitle: { text: "A comprehensive guide to understanding the various tokens used in the FREEDERATION ecosystem." },
  tokens: [
    {
      name: "Fortuna Rings",
      description: "A non-fungible token (NFT) generated randomly from the Treasure Chest of the Meta-Island. It is a type of Combi-Token, specifically designed to facilitate the minting process of new Regen-Planets within the Regen-Star ecosystem. The tokens are grouped into sets of five rings, each of a different color.",
      category: "Combi-Tokens",
    },
    {
      name: "CombiSet",
      description: "A configuration established in a Sustain-Collection to form a finite group of Combi-Tokens of the same series. By acquiring Combi-Tokens of the same series and completing the finite group (CombiSet), the collector can create an exclusive SustainBadge token.",
      category: "Combi-Tokens",
    },
    {
      name: "Combi-Token",
      description: "A non-fungible token (NFT) generated randomly through the SponsorShot process on Meta-Islands. They are associated with a defined Sustain-Collection in the Regen-Star, which sets a finite group combination pattern and series. By acquiring Combi-Tokens of the same series and completing the finite group (CombiSet), the collector can create an exclusive SustainBadge token.",
      category: "Combi-Tokens",
    },
    {
      name: "Listing-Token",
      description: "A semi-fungible token, granted through a Meta-Island via the SponsorShot process. It is associated with the Regen-Star to which the responsible Meta-Island belongs. These tokens allow each Sponsor to register their Nostr account on the featured subscribers list in the Meta-Islands, guaranteeing a top search position in trending topics.",
      category: "Meta-Islands",
    },
    {
      name: "Meta-Island",
      description: "A non-fungible token (NFT) representing an assurance agency within FREEDERATION, associated with an affiliate franchise of a Regen-Star. Meta-Islands perform Content Curation tasks, aggregating and cataloging quality information supported by the prestige guaranteed by the Regen-Star.",
      category: "Meta-Islands",
    },
    {
      name: "Nucleus-Token",
      description: "A fungible token used to create a new Regen-Star within FREEDERATION.",
      category: "Regen-Stars",
    },
    {
      name: "Regen-Planet",
      description: "A non-fungible token (NFT) associated with the entity responsible for creating and moderating Meta-Islands. It has associated participation equity tokens, granting rights over its benefits and management.",
      category: "Regen-Stars",
    },
    {
      name: "Regen-Planet-Equity",
      description: "A non-fungible token (NFT) representing equity participation in a Regen-Planet. It grants the holder full or partial rights when it corresponds to a fraction of the equity. It is obtained when a CombiSet of Fortuna Rings is activated.",
      category: "Regen-Stars",
    },
    {
      name: "Regen-Star",
      description: "A non-fungible token (NFT) associated with the registration of an organization dedicated to maintaining an Open Source project.",
      category: "Regen-Stars",
    },
    {
      name: "SponsorAccount Token",
      description: "A non-fungible token (NFT) granted to a Sponsor to activate their Nostr account and highlight their interactions on that social network. Through this token, they can participate in the Arbitration Tribunal and submit accusations. They are also highlighted as featured subscribers in other Nostr accounts.",
      category: "SponsorTokens",
    },
    {
      name: "Sustain-Collection",
      description: "A collection of exclusive and licensed NFTs by a Regen-Star, to encourage community participation and provide benefits to their collectors. Each Sustain-Collection establishes a token issuance configuration, defining a finite group combination (CombiSet) and a series number.",
      category: "Combi-Tokens",
    },
  ],
};
