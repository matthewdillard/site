---
title: The John Carroll School
description: Designed, developed, and modernized the private John Carroll School's web presence in Webflow, complete with component-based design library and data integrations.
date:
draft: false
tags:
started: 2023-02-01
completed: 2023-08-01
categories:
  - work
areas:
  - web design
  - web development
  - project management
  - graphic design
  - marketing
  - accessibility
  - design systems
  - cms
weight: 11
toc: true
hollow: true
feature: false
---
{{<figure
	src="jc-banner.jpg"
	alt="Masony grid of screens from the John Carroll website."
	class="ar-lllll cv"
>}}

I designed and developed a modernized web presence for the [John Carroll School](https://www.johncarroll.org/). This was my first significant professional project, working independently to meet design, development, and client management needs. 

## Context 

As part of a larger software agreement between my company and John Carroll, I was responsible for rebuilding the school website, which had become costly to maintain, poorly integrated with their data systems, and failed to communicate effectively with prospective families. Information architecture was unclear, and WCAG accessibility violations made the site both difficult to navigate and visually unappealing. The administration believed these shortcomings negatively impacted enrollment, community engagement, and their ability to connect with alumni.

## Design 

I began by addressing the information architecture in collaboration with the school's marketing director to improve navigability in such a way that it aligned with both visitor and school goals. 

I developed a new visual system inspired by IBM's design language, seeking to be punchy, accessible, and professional. This involved adapting the school's current application of brand colors within digital contexts to meet web accessibility standards without undermining the school's identity. 

## Deliverable 
The site was developed in Webflow, and build with an atomic system of over 100 reusable components, tokens variables, and CSS utility classes. Combined with a documented design system, 20 CMS collections, and template strategy, the site empowers school staff to add, edit, and manage content without the need for web-development experience. 

Automation was another key way that we further limited the burden of maintenance for school staff. I mapped out the school's data needs upfront, then worked with our engineering team to build services that pulled information from school databases and updated the site on regular intervals. 

## Takeaways 
This was my first serious professional project of scale, and one where I regularly needed to figure things out on my own. I learned that planning and project management are crucial, but not as much as your ability to adapt. Requirements would shift, new information emerged, and unforeseen problems arose, which meant my ability to learn and stay open-minded was a requirement for this project to succeed. 

This project also gave me a profound appreciate and understanding for the role of communication in large-scale projects. When things went wrong—from unmet expectations to technical challenges—my ability to talk with members of my team and the client determined how effectively we were able to address the problem, and reach a solution. 

You can explore the finished site at [www.johncarroll.org](https://www.johncarroll.org/). 

*Note: As of 2025, site ownership and responsibility for the website has been transferred to the [253 Media](https://www.253media.com/) company.*

<!--
Problem
- visually outdated site, falling short of competing schools
- burden to enter, update, and maintain content manually
	- e.g., athletic rosters, school & sports calendar, faculty
	- information is duplicated in database, but not linked
- accessibility shortcomings
- site structure/information architecture not supporting
	- needs of new/prospective students and their families, learning about the school, application process
	- needs of current students to access update to date information 
	- ability for school to connect and cultivate their alumni network
	- 

- John Carroll
	- work with clients to identify, accomodate needs with site development
		- Information architecture
			- support introduction/welcoming for new students
			- increase content infrastructure for alumni (news, spotlights, giving opportunities)
			- dynamic content to automate/sync database with school site
				- identified form of incoming data
				- designed format data endpoint within website
				- API integration to populate CMS on a regular schedule
		- Accessibility
			- WCG AA color contrast/legibility, semantic HTML, heading hierarchy
		- Content strategy
			- page, component templates linked to CMS collections
				- *e.g.* teams, players, athletics & school schedule, performances, news articles, clubs and activities, announcements, bus schedules, faculty & staff
			- component library
				- documented component library with guidance on using and adjusting page, section, and component template variants
		- 
-->