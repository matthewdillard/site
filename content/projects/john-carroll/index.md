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
hollow: false
feature: false
---
{{<figure
	src="jc-banner.jpg"
	alt="Masony grid of screens from the John Carroll website."
	class="ar-lllll cv"
>}}

I designed and developed a modernized web presence for the [John Carroll School](https://www.johncarroll.org/). 

## Context 

As part of a larger software agreement between my company and John Carroll, I took on the responsibility of rebuilding the school website. The site had become costly to maintain due to a lack of integration with the school database, meaning information like calendars and rosters needed to be synced manually. The site was also not communicating effectively with prospective families as well as the school wished. Information architecture was unclear, and WCAG accessibility violations made the site both difficult to navigate and visually unappealing. In building a new site, the school looked to me to correct these shortcomings, which they believed were negatively impacted enrollment, community engagement, and their ability to connect with alumni.

## Design 

I began by addressing the information architecture in collaboration with the school's marketing director to improve navigability in such a way that it aligned with both visitor and school goals. We identified flows for the various users and use-cases, and defined the site to serve the needs of:
- new/prospective students and their families and they learn about and complete the application process
- current students accessing update to date information 
- alumni seeking to connect, develop networks, and give back

I developed a new visual system seeking to be both eye-catching and professional, which required adapting the school's brand colors for digital contexts to meet web accessibility standards without undermining the school identity. This system was developed and tested in Figma, where I designed a representative sample of site pages, templates, and components, then moved to build.

## Deliverable 
The site was developed in Webflow, and build with an atomic system of over 100 reusable components, tokens variables, and CSS utility classes. Combined with a documented design system, 20 CMS collections, and template strategy, the site empowers school staff to add, edit, and manage content without the need for web-development experience. 

Automation was another key way that we further limited the burden of maintenance for school staff. I mapped out the school's data needs upfront, then worked with our engineering team to build services that pulled information from school databases and updated the site on regular intervals. 

You can explore the finished site at [www.johncarroll.org](https://www.johncarroll.org/). 

*Note: As of 2025, site ownership and responsibility for the website has been transferred to the [253 Media](https://www.253media.com/) company.*

## Takeaways 
This was my first serious professional project of scale, and one where I regularly needed to figure things out on my own. I learned that planning and project management are crucial, but not as much as your ability to adapt. Requirements would shift, new information emerged, and unforeseen problems arose, which meant my ability to learn and stay open-minded was a requirement for this project to succeed. 

This project also was also a learning opportunity for the importance of good communication in large-scale projects. When things didn't go according to plan, my ability to talk with members of my team and the client determined how effectively we were able to address the problem, and reach a solution. 

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