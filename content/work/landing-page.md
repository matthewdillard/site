---
title: Landing page builder
description: A tool using form inputs to define & populate Jinja2-templated landing pages, tailored for non-profits seeking to establish a lightweight web-presence.
date:
draft: false
tags:
started: 2022-06-01
completed: 2023-06-01
areas:
  - web design
  - web development
  - ux design
weight: 12
---
## Problem

Small, non-profit organizations excel in advocating and accelerating their causes. However, several factors—ranging from a lack of expertise and funds to intimidation by technology—make it difficult to establish or maintain an online presence.

A well-crafted website can significantly amplify their efforts, bringing outsized benefits to their cause, so the question then arises: How can we simplify the process for these organizations to create and grow their online presence? How can we increase engagement and exposure for their initiatives with a website?

## Context

As part of an initiative to empower small community organizations, I was charged with developing a landing page builder for my company. Working solo, the task was to create something beyond the WYSIWYG (What You See Is What You Get) editor approach, and leverage the company's strengths in data management while ensuring the tool still met the fundamental needs of our users.

![](https://web.archive.org/web/20250711074639im_/https://cdn.prod.website-files.com/652f0cc73610f38db0f3fbc9/661624d7ebb1b03d50f30d0b_Capture-2024-04-10-012338.png)

Four main areas where we are helping advance the causes of community organizations in need.

## Research

There are no shortage of intuitive landing page builders out there that boast drag-and-drop interfaces, customizable templates, and a plethora of components designed to optimize conversions. Despite the abundance of features, these tools can overwhelm small organizations that lack technical know-how. Their primary goals of boosting engagement, fundraising, and awareness, are frequently overshadowed by the complexity of these tools.

My research revealed we could simplify our audience's webpage needs down to foundational sections that offer conditional and parametrized customization to allow users to make the page their own. Furthermore, it became clear that creating an intuitive flow from the user's words to the website was crucial. This expansion of our focus beyond just that of a framework, to one that was concerned with personalization and storytelling, acknowledged that the strength of these organizations is in their ability to convey compelling narratives. Our role is to translate these narratives into digital spaces.

## Design 1.0

The core of our webpage builder revolved around customizable HTML templates, dynamically rendered from standardized form submissions. This form would collect style preferences, metadata, and allow users to construct a narrative with a set of dynamic content blocks.

A key design challenge was how to balance providing the user with flexibility against the paradox of choice. In attempting to streamline the creation and publishing of a web presence, we needed to ensure it did not remove the user's ability to make the page feel like their own.

![](https://web.archive.org/web/20250711074639im_/https://cdn.prod.website-files.com/652f0cc73610f38db0f3fbc9/66162583995b061b34f08dc4_Capture-2024-04-10-012434.png)

The original section components with inputs.

Given a finite set of building blocks, and their variety of potential uses, it was crucial to construct each component in such a way that it worked regardless of what content was provided. It was a challenge to keep an effective information architecture for each component variant with purely HTML and CSS, as the underlying code meant the page template was built first, and user's content inserted second.

## Observations

### Generalist vs. Specialist

In trying to design the building blocks to accommodated the most possible use cases, I fell into the trap of trying to satisfy everyone, and ended up satisfying no one in particular. In this case, my components were okay at a lot and great at little.

![](https://web.archive.org/web/20250711074639im_/https://cdn.prod.website-files.com/652f0cc73610f38db0f3fbc9/661625e147b261749de2c5ec_Capture-2024-04-10-012500.png)

![](https://web.archive.org/web/20250711074639im_/https://cdn.prod.website-files.com/652f0cc73610f38db0f3fbc9/661625e8f716184acd1d6504_Capture-2024-04-10-012510.png)

Here we see the same component with layouts that adapt to its content.

### Good enough

Users often over-relied on particular components when others would have been better candidates, likely because a lack of discoverability and guidance toward more effective choices.

### **Information design**

There was a prevalence of large, uninterrupted blocks of text, subheadings a paragraph in length, and general lack of effective information hierarchy across in user creations. Just because the framework, did not mean that content strategy was obvious.

### Accessibility & styling

While maximizing personalization was a key specification early on, it led to many issues. Harsh or ill-fitting color palettes, non-WCAG compliant text colors, and the use of small or low-quality images were common, underscoring the tension between user freedom and design best practices.

## Design 2.0

In approaching the redesign, I was committed to provide answers to the shortcomings of 1.0. Components gained new variants, guardrails prevented accessibility failures, and the form was refactored to better guide the user toward the best component for the job.

### Generalist vs. Specialist

Instead of a one-size-fits-all approach, I changed the code so that it called up the particular component variant that best fit the content combination provided by the form, and rendered it conditionally with template logic. This facilitated a more tailored, coherent presentation, without compromising the user's input.

![](https://web.archive.org/web/20250711074639im_/https://cdn.prod.website-files.com/652f0cc73610f38db0f3fbc9/66162667fc0a87d72a40d5a5_Screenshot%202024-04-10%20at%201.27.24%20AM.png)

The new Event card with adaptable layouts and styling

### Good enough

Changing the component selection process, we moved away from generic descriptions towards a query-based system. By asking users about the kind of the content they wanted to incorporate (e.g., text, images, long or short form, external links) we could guide them naturally toward the best-fitting section.

### Information design

Addressing the challenge of information design proved complex. Providing professional assistance to our clients works, but it doesn't scale. Starter templates are effective, but require a lot of up front labor, taking a while to build up an effective template library. LLMs provide the most potential upside but we are wary of interfering with the storytelling done by our clients, particularly when it comes to their charitable narratives.

![](https://web.archive.org/web/20250711074639im_/https://cdn.prod.website-files.com/652f0cc73610f38db0f3fbc9/6616265db23c0e134654842f_Capture-2024-04-10-012742.png)

By bucketing based on use instead of relying on naming conventions, it's easier to pick up on what components are used when and how.

### Accessibility and styling

I dialed back the amount of explicit customization possible within the styling configuration. I opted for more general options instead, and made decisions like text color based on the context of the element to ensure readability.

## Design 3.0

The latest round of design had me revamping the HTML structure completely, establishing distinct sections and components that can serve as the beginnings to a larger web design library. New sections were added to accomodate more specific use-cases, and advanced variables allow for users to have more say in their component layouts beyond default configurations.

This round of design skewed heavily on the architecture side, and less so the user experience. But in doing so, this new structure means the builder is more adaptable, and it will be easier to adapt the tool to our ever evolving goals and to our user's ever evolving needs.

## Retrospective

Acknowledging that the work to improve the landing page builder tool continues, there have nevertheless been certain areas in which I have learned lessons and made important observations.

### Research

Research can mitigate almost any problem, and deadlines are what keep you from doing more research. Research steers the product towards effective and useful endpoints, and can even tell you whether a problem is worth solving at all. A clearer picture of what were we as a company were trying to accomplish to begin with would have meant much less time falling down rabbit holes, and more feedback would have helped put us better paths sooner.

### Iteration

Iteration is a fluid process, and it's rarely linear. In keeping an open mind you allow yourself to keep progressing when roadblocks come into view. I learned that one should not let these challenges discourage me. Recognize what is in your control, and what is not. Understand that problems that come with ambiguity mean you must remain adaptable, and you cant be afraid to keep asking questions.