import type { PolicyBrief } from "@/lib/types";
import { virginiaFarmWellnessResilienceContent } from "@/data/policy-brief-content/virginia-farm-wellness-resilience";
import { policyBriefMeta } from "@/data/policy-brief-meta";

const POLICY_BRIEF_CONTENT: Record<string, string> = {
  "virginia-farm-wellness-resilience": virginiaFarmWellnessResilienceContent,
};

function attachContent(meta: (typeof policyBriefMeta)[number]): PolicyBrief {
  return {
    ...meta,
    content: POLICY_BRIEF_CONTENT[meta.slug] ?? "",
  };
}

export { policyBriefMeta } from "@/data/policy-brief-meta";

export function getBriefsForState(stateSlug: string) {
  return policyBriefMeta.filter((brief) => brief.stateSlug === stateSlug);
}

export function getPolicyBrief(
  stateSlug: string,
  briefSlug: string,
): PolicyBrief | undefined {
  const meta = policyBriefMeta.find(
    (brief) => brief.stateSlug === stateSlug && brief.slug === briefSlug,
  );
  return meta ? attachContent(meta) : undefined;
}
