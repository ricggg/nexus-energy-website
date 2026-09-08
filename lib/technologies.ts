export type Technology = {
  slug: string;
  name: string;
  icon: "flame" | "sun" | "wind" | "battery" | "zap" | "gauge";
  image: string;
  tagline: string;
  summary: string;
  body: string[];
  stats: { label: string; value: string }[];
};

export const TECHNOLOGIES: Technology[] = [
  {
    slug: "natural-gas",
    name: "Natural Gas",
    icon: "flame",
    image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    tagline: "Dispatchable power for a grid that never stops moving.",
    summary:
      "Flexible, fast-responding generation that firms up intermittent renewables and keeps the lights on when demand spikes.",
    body: [
      "As more wind and solar come online, the grid needs partners that can ramp up in minutes, not hours. Our natural gas fleet fills that role — providing the dispatchable capacity that balances an increasingly variable mix of resources.",
      "We develop, build, and operate gas-fired generating facilities across North America, from peaking plants that respond to short-term demand swings to larger combined-cycle assets that anchor regional grids.",
      "Every facility is engineered with emissions controls and efficiency in mind, and our operations teams monitor performance around the clock to keep availability high and downtime rare.",
    ],
    stats: [
      { label: "Generating capacity", value: "2,100+ MW" },
      { label: "Facilities in operation", value: "9" },
      { label: "Average response time", value: "< 10 min" },
    ],
  },
  {
    slug: "solar",
    name: "Solar",
    icon: "sun",
    image: "https://images.pexels.com/photos/19205947/pexels-photo-19205947/free-photo-of-solar-panels-on-a-desert.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    tagline: "Utility-scale solar, engineered for the long run.",
    summary:
      "Scalable photovoltaic energy centers that turn sunlight into steady, low-cost power for utilities, corporations, and communities.",
    body: [
      "Solar is one of the fastest, most cost-competitive ways to add clean capacity to the grid. We handle the full lifecycle — site selection, interconnection, permitting, construction, and long-term operations — so projects perform for decades, not just years.",
      "Our development teams work closely with landowners and local governments from the earliest stages, structuring projects that generate lease payments, tax revenue, and jobs alongside clean electricity.",
      "Post-construction, our operations and analytics teams track panel-level performance in real time, catching underperformance early and keeping energy centers running at peak output.",
    ],
    stats: [
      { label: "Solar capacity", value: "9,600+ MW" },
      { label: "Energy centers", value: "60+" },
      { label: "Avg. project lifespan", value: "35 yrs" },
    ],
  },
  {
    slug: "wind",
    name: "Land-Based Wind",
    icon: "wind",
    image: "https://images.pexels.com/photos/17789406/pexels-photo-17789406/free-photo-of-field-of-wind-turbines.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    tagline: "The backbone of America's renewable buildout.",
    summary:
      "Onshore wind projects that deliver affordable, market-competitive power while strengthening rural economies.",
    body: [
      "Wind remains one of the most cost-effective sources of new generation in the country. We've spent two decades refining how to site, build, and run wind energy centers that perform reliably for the long haul.",
      "We work directly with landowners and communities to structure partnerships that pay out over the life of a project, and with utilities and corporate buyers to structure power purchase agreements that fit their goals.",
      "Our in-house teams manage everything from turbine siting and wildlife studies to interconnection and 24/7 remote monitoring once a project is spinning.",
    ],
    stats: [
      { label: "Wind capacity", value: "14,000+ MW" },
      { label: "Turbines under management", value: "4,800+" },
      { label: "States with operating projects", value: "20" },
    ],
  },
  {
    slug: "storage",
    name: "Storage",
    icon: "battery",
    image: "https://images.pexels.com/photos/35105464/pexels-photo-35105464/free-photo-of-sprawling-solar-farm-with-wind-turbines-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    tagline: "Banking clean energy for when the grid needs it most.",
    summary:
      "Battery storage that smooths supply, defers costly infrastructure upgrades, and keeps clean power available after the sun sets.",
    body: [
      "Storage is the connective tissue between intermittent generation and a grid that demands power on-call. Our battery energy storage systems soak up excess generation and discharge it precisely when it's needed — shifting solar into the evening peak, or holding wind output for a calm day.",
      "We co-locate storage with new solar and wind projects and also build standalone systems that provide capacity, frequency regulation, and grid resilience services to utilities.",
      "Every system is remotely monitored and dispatched through the same operations center that runs our generation fleet, so storage assets respond to grid signals in seconds.",
    ],
    stats: [
      { label: "Storage capacity", value: "3,200+ MWh" },
      { label: "Standalone & hybrid systems", value: "25+" },
      { label: "Response time", value: "Seconds" },
    ],
  },
  {
    slug: "transmission",
    name: "Transmission",
    icon: "zap",
    image: "https://images.pexels.com/photos/9989519/pexels-photo-9989519.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    tagline: "The infrastructure that moves clean power to where it's needed.",
    summary:
      "High-voltage transmission lines that connect low-cost generation regions to the population centers that need the power most.",
    body: [
      "Generation only matters if it can reach the people who use it. We develop long-haul, high-voltage transmission infrastructure that links resource-rich regions to major demand centers, reducing congestion and lowering delivered energy costs.",
      "These are decade-long undertakings that require deep coordination with regulators, landowners, and grid operators across multiple states — work our development and permitting teams have done at scale.",
      "Once energized, our transmission assets are built to move power reliably for generations, with monitoring systems that flag issues long before they become outages.",
    ],
    stats: [
      { label: "Transmission line length", value: "1,000+ mi" },
      { label: "Interconnection points", value: "12" },
      { label: "Design lifespan", value: "50+ yrs" },
    ],
  },
  {
    slug: "geothermal",
    name: "Geothermal",
    icon: "gauge",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/NesjavellirPowerPlant_edit2.jpg?width=1600",
    tagline: "Always-on clean power drawn from the earth itself.",
    summary:
      "Baseload renewable generation that runs day and night, regardless of weather, wind, or season.",
    body: [
      "Geothermal is one of the only renewable resources that generates around the clock. We're expanding into geothermal development to add firm, weather-independent clean capacity to our technology mix.",
      "Our approach applies the same development discipline we've used in wind and solar — rigorous resource assessment, careful permitting, and long-term operating partnerships — to a resource that can run at high capacity factors for decades.",
      "As grids look for more always-on renewable capacity to complement solar and wind, geothermal is a natural next chapter in a diversified generation portfolio.",
    ],
    stats: [
      { label: "Typical capacity factor", value: "90%+" },
      { label: "Development pipeline", value: "Active" },
      { label: "Operating profile", value: "24/7" },
    ],
  },
];

export function getTechnology(slug: string) {
  return TECHNOLOGIES.find((t) => t.slug === slug);
}
