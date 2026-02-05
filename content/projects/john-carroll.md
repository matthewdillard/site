---
title: The John Carroll School
description: Designed, developed, and modernized the private John Carroll School's web presence in Webflow, complete with component-based design library and data integrations.
date:
draft: false
tags:
started: 2023-02-01
completed: 2023-08-01
areas:
  - web design
  - web development
  - project management
  - graphic design
  - marketing
weight: 11
---
I designed and developed a modernized web presence for the [John Carroll School](https://www.johncarroll.org/). This was my first significant professional project, working independently to meet design, development, and client management needs. 
## Context 

As part of a larger software agreement between my company and John Carroll, I was responsible for rebuilding the school website, which had become costly to maintain, poorly integrated with their data systems, and failed to communicate effectively with prospective families. Information architecture was unclear, and WCAG accessibility violations made the site both difficult to navigate and visually unappealing. The administration believed these shortcomings negatively impacted enrollment, community engagement, and their ability to connect with alumni.

One of the central requirements for the site was that it address the data integration issue with automation processes that updated website data from backend systems. As a one-person cross-functional team within a larger company initiative, I was responsible for owned site design and development, but also needed to work closely with our engineers to satisfy the technical requirements of this data-automation need. 
## Design 

I began by addressing the information architecture in collaboration with the school's marketing director to improve navigability in such a way that it aligned with both visitor and school goals. 

I developed a new visual system inspired by IBM's design language, seeking to be punchy, accessible, and professional. This involved challenging the school's current application of brand colors within digital contexts, and for a revised palette that met web accessibility standards while staying true to the school's identity. 
## Deliverable 
The site was developed in Webflow, and build with an atomic system of over 100 reusable components, tokens variables, and CSS utility classes. Combined with a documented design system, 20 CMS collections, and template strategy, the site empowers school staff to add, edit, and manage content without the need for web-development experience. 

Automation was another key way that we further limited the burden of maintenance for school staff. I mapped out the school's data needs upfront, then worked with our engineering team to build services that pulled information from school databases and updated the site on regular intervals. 

## Takeaways 
This was my first serious professional project of scale, and one where I regularly needed to figure things out on my own. I learned that planning and project management are crucial, but not as much as your ability to adapt. Requirements would shift, new information emerged, and unforeseen problems arose, which meant my ability to learn and stay open-minded was a requirement for this project to succeed. 

This project also gave me a profound appreciate and understanding for the role of communication in large-scale projects. When things went wrong—from unmet expectations to technical challenges—my ability to talk with members of my team and the client determined how effectively we were able to address the problem, and reach a solution. 

You can explore the finished site at [www.johncarroll.org](https://www.johncarroll.org/). 

As of 2025, site ownership and responsibility has been transferred to a new media company.

%%
```
**Narrative & content:**

**Context section is doing too much.** It's explaining the company's larger data ecosystem strategy, which doesn't matter to understanding your work on _this_ project. Simplify to: "The school's website had become costly to maintain, poorly integrated with their systems, and wasn't communicating effectively with prospective families. WCAG accessibility violations made it difficult to navigate. I was responsible for the design, development, and client management."

**"Design" section is too thin.** You mention IA and visual system, but there's no actual decision or tension. What did you change about the IA? What was the problem with the original palette, and how did you solve it? Even one sentence per area would ground this. Right now it reads like a checklist of things you did.

**"Deliverable" section is strong**, but "tokens variables" should be "token variables" (or "design tokens").

**Takeaways feel disconnected from the story.** You mention "planning and project management are crucial, but not as much as your ability to adapt"—but you never showed planning failing or adaptation succeeding. What actually happened? Did requirements shift mid-project? Did you discover something about Webflow you didn't expect? If you're going to keep the takeaways, anchor them to specifics.

**Grammatical & clarity issues:**

- "My role was principally to rebuild" — "principally" is awkward here. "My role was to rebuild..." is cleaner.
- "and failed to communicate effectively with prospective families" — "failed to communicate" is passive. Consider: "wasn't effectively reaching prospective families."
- "Information architecture was unclear, and WCAG accessibility violations made the site both difficult to navigate and visually unappealing" — This is doing two things at once. Split: "Information architecture was unclear. WCAG violations—particularly contrast issues with the existing color palette—made it difficult to navigate and visually unappealing."
- "One of the central requirements for the site was that it address the data integration issue with automation processes" — Rephrase: "A central requirement was automating data integration—pulling information from school systems and updating the site without manual staff intervention."
- "I was responsible for owned site design" — Should be "I owned the site design" or "I was responsible for the site design."
- "but also needed to work closely with our engineers to satisfy the technical requirements of this data-automation need" — "of this data-automation need" is awkward. Try: "to implement the data automation services."

**The bigger issue:** The Design and Deliverable sections read like you're listing what you made, not explaining why you made those choices or what problem they solved. Compare:

**Current:** "I developed a new visual system inspired by IBM's design language, seeking to be punchy, accessible, and professional."

**Stronger:** "The school's existing color palette—muted gold and blue—created contrast issues that violated accessibility standards. I developed a new visual system inspired by IBM's work, replacing those colors with a palette that met WCAG standards while maintaining the school's identity."

See the difference? One shows aesthetic preference. The other shows problem-solving.

Same with the component system—why did you build it that way? Because school staff needed to manage content without developer help. Say that.
```
%%