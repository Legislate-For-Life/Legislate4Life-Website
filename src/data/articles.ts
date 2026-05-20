import type { Article } from "@/lib/types";

// Articles are ordered newest first. To publish a new article, add an entry
// at the top of this array. When the two completed writing-team articles are
// ready, replace the "writers-article-one" and "writers-article-two" entries
// with the real title, excerpt, date, author, and content.
export const articles: Article[] = [
  {
    slug: "writers-article-one",
    title: "[Writing Team Article 1] Title Goes Here",
    excerpt:
      "Short summary of the article goes here. Once the writing team finalizes this piece, replace this excerpt with the real one.",
    date: "2026-05-01",
    author: "Writing Team",
    content: `This is a placeholder for the first writing team article. Replace the slug, title, excerpt, date, author, and this body content in src/data/articles.ts once the real article is ready to publish.

## Section heading example

Body paragraph example. Two newlines create a new paragraph. Markdown-style **bold** is supported inline.`,
  },
  {
    slug: "writers-article-two",
    title: "[Writing Team Article 2] Title Goes Here",
    excerpt:
      "Short summary of the second article goes here. Replace this with the real excerpt before publishing.",
    date: "2026-04-15",
    author: "Writing Team",
    content: `This is a placeholder for the second writing team article. Replace the metadata and content in src/data/articles.ts once the real article is ready.`,
  },
  {
    slug: "why-public-policy-education-matters",
    title: "Why Public Policy Education Matters Now",
    excerpt:
      "Good decisions, by policymakers or anyone else, start with good information. Here is why the foundation invests so much in plain-language public policy education.",
    date: "2026-03-15",
    author: "The Legislative for Life Foundation",
    content: `Most of the policy decisions that affect our daily lives, from public health to education to local infrastructure, are made in rooms that the public rarely sees. The conversations are technical, the documents are long, and the conclusions are usually written for other experts.

## A growing information gap

Public trust in institutions has been declining for years. One of the quieter reasons for that decline is information access. When people cannot find clear, trustworthy explanations of what is being decided and why, the only options left are speculation and frustration.

**Plain-language education is not dumbing down policy.** It is making sure that the people most affected by a decision have a real chance to understand it, weigh it, and respond to it.

## What we focus on

The foundation focuses on three closely related kinds of work:

1. **Policy research** that takes the questions seriously and grounds the analysis in evidence and lived experience.
2. **Public education** that translates that research into clear writing, explainers, and resources that anyone can use.
3. **Community engagement** that brings the information home, to schools, community organizations, and the people quietly carrying the weight of these issues every day.

## The role of policymakers

Educating policymakers is part of the picture, too. Elected officials and their staff are often working with limited time, limited bandwidth, and an enormous amount to read. Well-organized, accessible research helps them make better decisions, faster.

Our work is not about pushing any single agenda. It is about closing the information gap on the issues we research, so that the conversations about those issues can happen with everyone at the table.`,
  },
  {
    slug: "rural-mental-health-research-snapshot",
    title: "Rural Mental Health: What the Research Tells Us",
    excerpt:
      "An overview of what current research shows about mental health access in rural communities, and where the gaps are.",
    date: "2026-02-28",
    author: "Center for Public Policy",
    content: `Mental health remains one of the most consistently under-served areas of public health in the United States, and rural communities feel that gap more acutely than most.

## What the data shows

A few patterns come up in almost every study:

**Access is uneven.** A majority of rural counties have a shortage of mental health professionals. In some states, the ratio of residents to licensed providers is significantly higher than the national average.

**Stigma is real but changing.** Awareness work and education over the past decade have shifted some of the long-standing stigma around seeking help. The shift is uneven, but it is happening.

**Telehealth helps.** Where broadband access exists, virtual mental health services have expanded reach meaningfully. Where it does not, the access gap remains.

## Where research and public education connect

Research alone does not close gaps. People need to know what services exist, what to expect, and how to access them. That is where public education work matters most.

The foundation focuses on translating findings like the ones above into accessible resources, partnering with local organizations doing direct service work, and making sure policymakers have the evidence in front of them when these issues come up.

## What we are working on

This is one of several areas the Center for Public Policy is researching across Virginia and Texas. As that work develops, we will publish more detailed analysis and recommendations.`,
  },
  {
    slug: "translating-research-into-recommendations",
    title: "Translating Research into Practical Recommendations",
    excerpt:
      "Research that sits in a PDF nobody reads does not change anything. Here is how the foundation moves from findings to recommendations that matter.",
    date: "2026-01-20",
    author: "Center for Public Policy",
    content: `One of the most common requests we hear from community leaders and policymakers alike sounds something like this: "We do not need more research, we need to know what to do with it."

That is a fair critique. Research and recommendations are not the same thing, and bridging the two is harder than it looks.

## What a useful recommendation looks like

A practical policy recommendation, in our experience, tends to have a few qualities:

**It is grounded.** It points back to specific evidence and lived experience, not just a general sense of what should happen.

**It is specific.** It says what the proposed change is, who would implement it, and what it would actually look like in practice.

**It is honest about trade-offs.** Every recommendation has costs. Pretending otherwise undermines trust.

**It is accessible.** A policymaker should be able to read it and understand it, and so should the people most affected by it.

## How we work

The Center for Public Policy starts with research and ends with public-facing recommendations. Between those two ends, the work is iterative: drafts get reviewed by people closer to the issue, sharpened, and translated into language that holds up both in a policy briefing and in a community conversation.

This is the kind of work that depends on a lot of contributors. Researchers, writers, editors, and community partners all play a role. If you want to be part of it, the Center for Public Policy is actively recruiting.`,
  },
];
