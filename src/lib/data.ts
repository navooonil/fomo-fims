import type { Project, CaseStudy } from "./types";

/* ---------------------------------------------------
   CASE STUDIES — FULL DETAILED DATA
---------------------------------------------------- */

export const allCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Bhojohori Manna",
    client: "Bhojohori Manna",
    subtitle: "Turning Culture into Cinematic Storytelling.",
    problem:
      "The brand wanted visuals that captured their cultural heritage and culinary artistry, but in a modern, social-first format.",
    approach:
      "We developed a narrative-first approach—using cinematic lighting, macro shots, and motion-based storytelling to highlight the authentic cooking process.",
    outcome:
      "The content led to a 300% increase in Instagram engagement and a significant boost in brand recall across younger audiences.",
    heroVideoUrl:
      "https://storage.googleapis.com/aistudio-hosting/media/cinematic-montage-placeholder.mp4",
    imageUrl: "https://picsum.photos/seed/case1/1200/800",
    services: ["Cinematography", "Brand Film", "Social Media Content"],
    stats: [
      { label: "Engagement Increase", value: "300%" },
      { label: "Follower Growth", value: "25K" },
      { label: "Campaign Reach", value: "1.2M" },
    ],
    gallery: [
      "https://picsum.photos/seed/resto-g1/800/600",
      "https://picsum.photos/seed/resto-g2/800/600",
      "https://picsum.photos/seed/resto-g3/800/600",
      "https://picsum.photos/seed/resto-g4/800/600",
    ],
  },

  {
    id: 2,
    title: "The Daily Grind",
    client: "The Daily Grind Café",
    subtitle: "From Low Engagement to a Full Content Revamp.",
    problem:
      "The café had excellent ambience offline but struggled to translate its vibe into online engagement. Their feed lacked story and aesthetic direction.",
    approach:
      "We reconstructed their brand narrative around the idea of ‘cozy moments’. The content included lifestyle shots, customer interactions, and behind-the-scenes storytelling.",
    outcome:
      "The café saw 5× profile visits, a 40% follower increase, and improved foot traffic attributed directly to social media reach.",
    imageUrl: "https://picsum.photos/seed/case2/1200/800",
    services: [
      "Social Media Management",
      "Content Strategy",
      "Reels Production",
    ],
    stats: [
      { label: "Profile Visits", value: "5×" },
      { label: "Follower Growth", value: "+40%" },
      { label: "Timeframe", value: "3 Months" },
    ],
    gallery: [
      "https://picsum.photos/seed/cafe-g1/800/600",
      "https://picsum.photos/seed/cafe-g2/800/600",
      "https://picsum.photos/seed/cafe-g3/800/600",
    ],
  },

  {
    id: 3,
    title: "Phocus Skincare",
    client: "Phocus",
    subtitle: "Clean, Minimal Product Shots + Social-First Launch.",
    problem:
      "Phocus needed minimal, premium visuals for their new skincare launch, optimized for ads and e-commerce pages.",
    approach:
      "We produced clean studio shots, slow-motion macro clips, and lifestyle setups—using reflective surfaces and soft lighting to emphasize product texture.",
    outcome:
      "The launch exceeded sales targets by 150% within the first week. Video ads achieved a CTR twice the industry standard.",
    imageUrl: "https://picsum.photos/seed/case3/1200/800",
    services: ["Product Commercial", "Photography", "Ad Creatives"],
    stats: [
      { label: "Sales Target", value: "+150%" },
      { label: "Ad CTR", value: "2× Industry Avg." },
    ],
    gallery: [
      "https://picsum.photos/seed/prod-g1/800/600",
      "https://picsum.photos/seed/prod-g2/800/600",
      "https://picsum.photos/seed/prod-g3/800/600",
      "https://picsum.photos/seed/prod-g4/800/600",
      "https://picsum.photos/seed/prod-g5/800/600",
    ],
  },

  {
    id: 4,
    title: "Urban Explorer",
    client: "Alex Chen",
    subtitle: "Crafting a Narrative for a Travel Creator.",
    problem:
      "A travel creator had raw footage but lacked strong narrative flow, causing poor audience retention.",
    approach:
      "We collaborated as creative partners—building storytelling structures, refining pacing, adding immersive sound design, and crafting a cinematic color style.",
    outcome:
      "Average view duration increased by 60%, with the creator developing a strong, recognizable visual identity that attracted brand deals.",
    imageUrl: "https://picsum.photos/seed/case4/1200/800",
    services: ["Video Editing", "Color Grading", "Story Consulting"],
    stats: [{ label: "View Duration", value: "+60%" }],
    gallery: [
      "https://picsum.photos/seed/creator-g1/800/600",
      "https://picsum.photos/seed/creator-g2/800/600",
    ],
  },
];

/* ---------------------------------------------------
   PROJECTS — THUMBNAILS SHOWN IN HOMEPAGE / PORTFOLIO
---------------------------------------------------- */

export const allProjects: Project[] = [
  {
    id: 1,
    caseStudyId: 1,
    category: "Restaurants",
    title: "Bhojohori Manna",
    description: "Cinematic food & ambience shoots",
    imageUrl: "https://picsum.photos/seed/resto1/800/600",
  },
  {
    id: 2,
    caseStudyId: 2,
    category: "Cafés",
    title: "The Daily Grind",
    description: "Aesthetic lifestyle reels & storytelling",
    imageUrl: "https://picsum.photos/seed/cafe1/800/600",
  },
  {
    id: 3,
    caseStudyId: 3,
    category: "Products",
    title: "Phocus Skincare",
    description: "Product commercials & lifestyle reels",
    imageUrl: "https://picsum.photos/seed/product1/800/600",
  },
  {
    id: 4,
    caseStudyId: 4,
    category: "Creators",
    title: "Urban Explorer",
    description: "BTS & cinematic storytelling",
    imageUrl: "https://picsum.photos/seed/creator1/800/600",
  },
  {
    id: 5,
    caseStudyId: 1,
    category: "Restaurants",
    title: "Spice Route",
    description: "Cultural culinary journey campaign",
    imageUrl: "https://picsum.photos/seed/resto2/800/600",
  },
  {
    id: 6,
    caseStudyId: 3,
    category: "Products",
    title: "Aura Watches",
    description: "Luxury product showcase",
    imageUrl: "https://picsum.photos/seed/product2/800/600",
  },
  {
    id: 7,
    caseStudyId: 2,
    category: "Cafés",
    title: "Morning Brew",
    description: "From bean to cup narrative",
    imageUrl: "https://picsum.photos/seed/cafe2/800/600",
  },
  {
    id: 8,
    caseStudyId: 4,
    category: "Creators",
    title: "Wanderlust Films",
    description: "Travel content series",
    imageUrl: "https://picsum.photos/seed/creator2/800/600",
  },
];
