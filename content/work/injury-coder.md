---
title: Injury Coder
description: Designed & built AIS injury coder prototype addressing accessibility and efficiency needs of trauma center registrars with RAG model, information transparency, and full keyboard-navigation.
date:
draft: false
tags:
areas:
  - ux design
  - ux research
started: 2025-05-01
completed: 2025-07-01
weight: 3
---
I designed a tool to help trauma center registrars accurately code patient injuries accurately under significant time constraints in high-stakes healthcare settings.

## Context

>"We just want a streamlined process that we can feel confident is accurate."

Patient data accuracy is critical for trauma centers because of it affects research, funding, operations, and quality of care. It's the responsibility of only a handful of registrars to process upwards of thousands of patients that a trauma center takes in annually. To do this, registrar's must diligently scour clinical records to identify patient diagnoses, then apply the appropriate AIS & ICD-10 injury codes to the patient's registry record for that patient as accurately as possible.

## Research

I organized and conducting interviews with registrars, nurses, & trauma center leadership at the Washington D.C. MedStar Hospital, allowing our team to gain an empathetic understanding of the circumstances and challenges for injury coders.

### Algorithmic assistance

Injury coding tools currently employ hard-wired algorithms to generate code suggestions based on a list of diagnosis descriptions registrars type in, which can streamline injury coding while also offering a crutch to less-experienced registrars. 

>The majority of the time (90 plus percent) our registrars are not doing anything manual with AIS and ICD 10. They it populate, glance at it, and we're good.

However, burdened by their extreme workload and points of procedural friction beyond their control, registrars are not reliably afforded the opportunity for meticulous injury coding, and are instead motivated a rely more heavily on these algorithms. 

>It's very supportive for new people... but once you give them something that's easy to default to, they never grow."

### Broader consequences

This over-reliance exacerbated a second problem, which was that the hard-wired algorithms were becoming less accurate. Updates to the AIS & ICD-10 code sets meant that code suggestions were less precise, and less reliable.

Alongside interface signal-to-noise problems, these conditions combined to create a scenario where real-time data validation was more necessary for the same reason it was more challenging. The consequences of it all was inaccurate injury-coding threatening not just trauma center funding and operations, but patient outcomes. 

>"The coding suffers, and the facility suffers, because it makes you look like you're not taking care of the sickest of the sick."

Our tool would need to seek a balance between automation and intentional, engaged injury coding — working *with* registrars, not around them, in order to support the immediate, and long-term needs of trauma centers. 

## Design

### Trustworthy automation

Advances in ML provided the opportunity to establish an innovative natural-language injury-coding process, but I exercised caution: LLMs are opaque, are prone to hallucinate, and lack a reliable way to guarantee valid responses. Instead, we pursued a Retrieval Augmented Generation model, which references a knowledge base for its responses. This not only makes it more transparency and reliable, but less resource intensive, and easier to maintain as well.

### Information design

We addressed accuracy & efficiency through the user-interface and user-experience as well as by technical improvements. One way was by introducing a "confidence" score to accompany all codes the RAG model suggested, which repurposed a value inherently used by the model to determine the best response. By revealing this ranked value, we aid registrars in prioritizing their focus on the codes which need human review most, while also making the tool more transparent and credible. 

### Accessible interactions

For generated codes that need revision, a keyboard navigable inline dropdown displays codes within their dictionary, offering code laterality and context for easy refinement. This drill-down dictionary menu was also designed as an alternate  entry mode, supporting ad-hoc coding, power users, and visibility of system status. As many registrars are former nurses transitioning careers later in life, age-related accessibility concerns made prioritizing inclusive interactions important across the final design—not least because accessibility benefits everyone, not just those who need on it.

## Feedback & takeaways

The "confidence" score feature was positively received—particularly regarding the increased transparency of AI-technologies which are not universally trusted—which maintained the level of automated assistance without ignoring the value registrar expertise provides. The easier means of revising codes was also received well, with feedback motiving this idea further to support editting of the diagnoses detail inline as a way to update coding as well. 

Readability was one of my earliest considerations—due to age-related accessibility concerns for registrars often transitioning to the role later in their careers—and I increased font sizing and spacing accordingly. However, feedback informed me that being able to view lots of information at once was worth the cost of information density. The lesson for me here: accessibility does not always mean "best practices," but it does necessitate recognizing user's unique needs.

This injury coding tool is part of Digital Innovation's V7 Platform and is still in development. The full scope of these refinements, and the degree to which they will be implemented is still being determined.
