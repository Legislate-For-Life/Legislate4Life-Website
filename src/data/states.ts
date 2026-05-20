import type { StatePolicyPage } from "@/lib/types";

// Current and developing areas of policy research. Active states are
// states the foundation is currently researching. Developing states are
// future research expansion targets, not yet confirmed.
export const states: StatePolicyPage[] = [
  {
    slug: "virginia",
    name: "Virginia",
    abbreviation: "VA",
    status: "active",
    summary:
      "Virginia is one of our two current research focus areas. The Commonwealth's mix of dense urban regions, rural communities, and a sizable federal workforce makes it a particularly useful place to study how policy moves between research and lived experience.",
    focusAreas: [
      "Public mental health awareness and access",
      "Civic engagement in mixed urban and rural communities",
      "Public education on state-level policy issues",
    ],
    research: [
      "Virginia's mental health system has expanded in recent years, but research continues to show significant gaps in rural access and youth-focused services.",
      "Civic engagement varies sharply across regions, suggesting different community-level approaches are needed for outreach and public education to be effective.",
      "State policymakers and community leaders consistently cite the need for clearer, more accessible policy summaries on a wide range of issues.",
    ],
    recommendations: [
      {
        title: "Expand plain-language policy education",
        summary:
          "Public education resources that explain state policy in clear terms help communities understand what's happening, why it matters, and how to engage.",
      },
      {
        title: "Strengthen rural awareness initiatives",
        summary:
          "Mental health and civic engagement awareness work tailored to rural Virginia would help close documented gaps in information and resource access.",
      },
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    status: "active",
    summary:
      "Texas is our second current research focus area. The state's scale, demographic diversity, and the range of issues policymakers and communities are navigating make it a high-impact place for the foundation's research and public education work.",
    focusAreas: [
      "Mental health awareness in growing communities",
      "Public education on state and local policy",
      "Community-level engagement and outreach",
    ],
    research: [
      "Texas continues to experience some of the fastest population growth in the country, creating new pressure on public services and the need for clear public information.",
      "Rural and exurban communities frequently report limited access to clear, trustworthy explanations of state and federal policy that affects them.",
      "Researchers have repeatedly highlighted the value of community-based education programs as a complement to formal state communication.",
    ],
    recommendations: [
      {
        title: "Invest in community-level civic education",
        summary:
          "Local programs that help residents understand how state and federal policy actually works tend to drive higher engagement and better-informed decision-making.",
      },
      {
        title: "Translate state policy into plain language",
        summary:
          "Accessible explainers on key policy issues help bridge the gap between formal policy documents and everyday public understanding.",
      },
    ],
  },
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    status: "developing",
    summary:
      "California is a potential future research focus area. We're scoping the most useful contributions the foundation could make given the scale and complexity of state policy work already underway.",
    focusAreas: [
      "Initial scoping of priority research areas",
      "Mapping existing public education infrastructure",
    ],
    research: [
      "Initial scoping in progress. We're identifying issue areas where the foundation's public education and research approach would add the most value.",
    ],
    recommendations: [],
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbreviation: "MD",
    status: "developing",
    summary:
      "Maryland is a potential future research focus area. We're evaluating where the foundation's policy research and public education work could most usefully complement existing efforts.",
    focusAreas: [
      "Initial scoping of priority research areas",
      "Identifying community-level engagement opportunities",
    ],
    research: [
      "Initial scoping in progress. We're identifying the policy areas where clear, accessible public education is most needed.",
    ],
    recommendations: [],
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    status: "developing",
    summary:
      "New York is a potential future research focus area. The state's size and policy complexity present both opportunities and questions about where the foundation can add the most value.",
    focusAreas: [
      "Initial scoping of priority research areas",
      "Public education on state policy",
    ],
    research: [
      "Initial scoping in progress. We're working through where independent policy research and public education would be most useful for residents and policymakers.",
    ],
    recommendations: [],
  },
];
