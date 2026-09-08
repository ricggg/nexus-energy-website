export type Project = {
  name: string;
  location: string;
  technology: string;
  capacity: string;
  status: "Operating" | "Under Construction" | "In Development";
};

export const PROJECT_STATS = {
  projects: "210",
  gigawatts: "34",
  continents: "4",
};

export const PROJECTS: Project[] = [
  { name: "Prairie Horizon Wind", location: "Illinois, USA", technology: "Wind", capacity: "312 MW", status: "Operating" },
  { name: "Sunfield Solar Center", location: "Texas, USA", technology: "Solar", capacity: "450 MW", status: "Operating" },
  { name: "Meadow Creek Storage", location: "California, USA", technology: "Storage", capacity: "180 MWh", status: "Operating" },
  { name: "Cascade Ridge Transmission", location: "Oregon → Nevada, USA", technology: "Transmission", capacity: "780 mi", status: "Under Construction" },
  { name: "Blue Harbor Energy Center", location: "Ohio, USA", technology: "Natural Gas", capacity: "540 MW", status: "Operating" },
  { name: "North Fork Solar", location: "Ontario, Canada", technology: "Solar", capacity: "220 MW", status: "In Development" },
  { name: "Redstone Wind Farm", location: "Oklahoma, USA", technology: "Wind", capacity: "298 MW", status: "Operating" },
  { name: "Amber Basin Geothermal", location: "Nevada, USA", technology: "Geothermal", capacity: "60 MW", status: "In Development" },
  { name: "Iron Bridge Storage", location: "Arizona, USA", technology: "Storage", capacity: "240 MWh", status: "Under Construction" },
  { name: "Whitecap Wind", location: "Scotland, UK", technology: "Wind", capacity: "410 MW", status: "Operating" },
  { name: "Vistara Solar Park", location: "Andhra Pradesh, India", technology: "Solar", capacity: "500 MW", status: "Operating" },
  { name: "Continental Interconnect", location: "Kansas → Indiana, USA", technology: "Transmission", capacity: "1,020 mi", status: "In Development" },
];

export const TECH_FILTERS = ["All", "Natural Gas", "Solar", "Wind", "Storage", "Transmission", "Geothermal"] as const;
