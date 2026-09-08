export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: "News" | "Press Release" | "Insight";
  excerpt: string;
  featured?: boolean;
};

export const NEWS: NewsItem[] = [
  {
    slug: "manufacturing-partnership-expands-supply-chain",
    title: "Nexus Energy Backs Domestic Cable Manufacturing to Strengthen U.S. Supply Chains",
    date: "Jun 20, 2026",
    category: "Press Release",
    excerpt:
      "A new manufacturing partnership will localize production of key transmission components, reducing lead times across our development pipeline.",
    featured: true,
  },
  {
    slug: "pleasant-ridge-solar-breaks-ground",
    title: "Pleasant Ridge Solar Energy Center Breaks Ground in Franklin County",
    date: "Jun 12, 2026",
    category: "News",
    excerpt:
      "Construction has begun on a 300 MW solar energy center expected to power more than 60,000 homes once complete.",
  },
  {
    slug: "redstone-wind-farm-commences-operations",
    title: "Redstone Wind Farm Commences Commercial Operations",
    date: "Jun 4, 2026",
    category: "News",
    excerpt:
      "The 298 MW project is now delivering power to the regional grid, marking our 40th wind energy center to reach commercial operation.",
  },
  {
    slug: "continental-interconnect-contractor-award",
    title: "Continental Interconnect Awards Construction Contract for 1,000-Mile Transmission Line",
    date: "May 7, 2026",
    category: "Press Release",
    excerpt:
      "The award marks a major milestone for one of the largest transmission projects currently under development in North America.",
  },
  {
    slug: "storage-outlook-2026",
    title: "Why Storage Is the Fastest-Growing Piece of the Generation Mix",
    date: "Apr 18, 2026",
    category: "Insight",
    excerpt:
      "A look at how battery storage economics have shifted over the past three years, and what it means for future project design.",
  },
  {
    slug: "geothermal-development-program",
    title: "Nexus Energy Expands Into Geothermal With New Development Program",
    date: "Mar 2, 2026",
    category: "News",
    excerpt:
      "The program adds a firm, always-on renewable technology to a portfolio historically anchored in wind, solar, and gas.",
  },
];
