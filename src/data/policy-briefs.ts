import type { PolicyBrief } from "@/lib/types";
import { ORG_NAME } from "@/lib/constants";
import { virginiaFarmWellnessResilienceContent } from "@/data/policy-brief-content/virginia-farm-wellness-resilience";

export const policyBriefs: PolicyBrief[] = [
  {
    slug: "virginia-farm-wellness-resilience",
    stateSlug: "virginia",
    title:
      "Virginia Farm Wellness & Resilience: Strengthening Farmer Mental Health Access and Rural Virginia",
    excerpt:
      "A coordinated statewide framework combining community-based outreach, farmer-focused teletherapy expansion, centralized resource navigation, and streamlined grant access for Virginia's agricultural communities.",
    date: "2026-06-01",
    author: ORG_NAME,
    content: virginiaFarmWellnessResilienceContent,
    pdfFile: "virginia-farm-wellness-resilience.pdf",
  },
];

export function getBriefsForState(stateSlug: string): PolicyBrief[] {
  return policyBriefs.filter((brief) => brief.stateSlug === stateSlug);
}

export function getPolicyBrief(
  stateSlug: string,
  briefSlug: string,
): PolicyBrief | undefined {
  return policyBriefs.find(
    (brief) => brief.stateSlug === stateSlug && brief.slug === briefSlug,
  );
}
