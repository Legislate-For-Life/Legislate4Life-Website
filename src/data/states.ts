import type { StatePolicyPage } from "@/lib/types";

// Placeholder policy content. Replace with real research and bill details
// as the team's state-by-state work develops.
export const states: StatePolicyPage[] = [
  {
    slug: "iowa",
    name: "Iowa",
    abbreviation: "IA",
    summary:
      "Iowa is one of the nation's largest agricultural economies, with farming touching nearly every rural community. Mental health infrastructure has lagged behind that scale.",
    research: [
      "Over 85% of Iowa counties are federally designated Mental Health Professional Shortage Areas.",
      "Iowa farmers report some of the highest rates of stress and burnout in the Midwest, driven by commodity price swings and generational debt.",
      "Telehealth adoption has grown, but broadband access remains a barrier in many rural counties.",
    ],
    legislation: [
      {
        title: "Iowa Rural Mental Health Access Act",
        billNumber: "SF 1234 (placeholder)",
        status: "Proposed",
        summary:
          "Would establish a dedicated state fund for rural mental health services, including farmer-specific counseling programs and 24/7 crisis response.",
      },
      {
        title: "Agricultural Stress Assistance Expansion",
        status: "In Committee",
        summary:
          "Would expand state matching funds for the Farm and Ranch Stress Assistance Network (FRSAN) and require mental health training for ag extension agents.",
      },
    ],
  },
  {
    slug: "nebraska",
    name: "Nebraska",
    abbreviation: "NE",
    summary:
      "Nebraska's farming communities face unique pressures from prolonged droughts and shifting markets. State-level mental health support is limited.",
    research: [
      "More than half of Nebraska's 93 counties have no licensed psychiatrist.",
      "Agricultural suicide rates in Nebraska outpace the national farm average, with ranching communities disproportionately affected.",
      "Existing hotline programs report high demand but limited funding for sustained follow-up care.",
    ],
    legislation: [
      {
        title: "Nebraska Farm Family Mental Health Act",
        status: "Proposed",
        summary:
          "Would fund rural mental health vouchers for farm families and create a statewide network of agricultural peer-support specialists.",
      },
    ],
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbreviation: "KS",
    summary:
      "Kansas combines major commodity farming with significant ranching operations. Mental health access varies widely between the eastern and western halves of the state.",
    research: [
      "Roughly 70% of Kansas farmers report moderate to severe work-related stress in recent surveys.",
      "Rural hospital closures have reduced access to both physical and behavioral health care.",
      "Ag extension services have begun piloting mental health first-aid training with promising early results.",
    ],
    legislation: [
      {
        title: "Kansas Rural Behavioral Health Investment",
        status: "In Committee",
        summary:
          "Would direct state funds toward rural behavioral health infrastructure, with a dedicated line item for agricultural communities.",
      },
    ],
  },
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    summary:
      "California's agricultural workforce is the largest and most diverse in the country. Mental health needs span owners, family operations, and farmworkers.",
    research: [
      "Farmworker communities face high rates of stress, depression, and anxiety, often compounded by language and immigration barriers.",
      "Heat, wildfire smoke, and climate-driven water insecurity add significant mental health strain across the Central Valley.",
      "Culturally and linguistically appropriate mental health services remain underfunded relative to the scale of need.",
    ],
    legislation: [
      {
        title: "California Farmworker Mental Health Access Act",
        status: "Proposed",
        summary:
          "Would expand bilingual and bicultural mental health services in agricultural regions and fund community health worker programs.",
      },
      {
        title: "Central Valley Behavioral Health Expansion",
        status: "Introduced",
        summary:
          "Would direct state behavioral health dollars specifically to Central Valley agricultural counties with the greatest access gaps.",
      },
    ],
  },
];
