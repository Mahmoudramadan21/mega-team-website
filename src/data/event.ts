import { EventData } from '@/types/event';

/**
 * totalEvents
 *
 * Centralized data for all past MEGA Team MU events (as of December 21, 2025).
 *
 * Best Practices Applied:
 * - escription field containing the full official long description (as provided by the team).
 * - Formatted with \n\n for natural paragraph separation – ideal for rendering as multiple <p> elements or with react-markdown.
 * - All events marked as 'closed' since the latest (MEGFAIR 1.0) concluded in May 2025.
 * - Ordered exactly as in the official documentation.
 * - Image paths are unique placeholders – replace with actual event posters when available
 *   (recommended source: https://www.facebook.com/megateam.mu18/).
 * - Meta information kept concise and relevant for quick info badges.
 * - Type-safe and readonly for immutability and future scalability (e.g., API integration).
 */
export const totalEvents: readonly EventData[] = [
  {
    slug: 'megaverse',
    title: 'Megaverse',
    description:
      `We successfully concluded our Megaverse event, where we delivered a comprehensive experience that explored the evolution of technology from its early beginnings to the emerging world of Virtual Reality and the Metaverse.\n\n` +
      `Throughout the event, we highlighted the impact of these modern technologies on the future of work, communication, and innovation, while presenting key global trends and the technologies driving this digital transformation.\n\n` +
      `During the event, we provided a clear and structured explanation of the core components of the Metaverse and showcased real-world applications of Virtual Reality and its role in building interactive digital environments.\n\n` +
      `We also discussed insights from leading figures in the tech industry and emphasized the growing global interest in these technologies across major conferences and platforms.\n\n` +
      `Our goal in organizing this event was to promote technological awareness and present reliable, accessible content that helps participants understand the rapid digital changes shaping our world. We believe that our role extends beyond sharing knowledge to empowering our community to anticipate and contribute to the future of technology.`,
    state: 'closed',
    link: '/events/megaverse',
    image: {
      src: '/images/next-event.png',
      alt: 'Megaverse event poster – exploring VR and the Metaverse',
      width: 630,
      height: 600,
    },
    dateTime: '2023-02-01',
    meta: [
      { icon: "calendar", label: 'Date', value: 'February 2023' },
      { icon: "map-pin", label: 'Location', value: 'Mansoura University' },
      { icon: "record", label: 'Focus', value: 'Metaverse & Virtual Reality' },
    ],
  },
  {
    slug: 'faculty-of-atlantis',
    title: 'Faculty of Atlantis (Faculty of Future)',
    description:
      `Faculty of Future provided an exceptional space for exploring the technological landscape of the coming years and understanding how rapidly advancing innovations will shape the world ahead. The event focused on highlighting the growing impact of computer science and information technology in building a future driven by creativity, intelligence, and continuous development.\n\n` +
      `Throughout the event, we aimed to inspire participants and broaden their perspective on what technology can achieve. Discussions covered the progression of artificial intelligence, the evolution of digital systems, and the transformative applications that will influence work, education, and daily life. We also examined the challenges and opportunities that are expected to emerge, offering attendees a deeper understanding of future trends and how to prepare for them.\n\n` +
      `Faculty of Future sought to enhance technological awareness and support the development of a clear vision of what lies ahead. The event emphasized the importance of staying informed, adapting to rapid change, and embracing innovation as a key element in shaping a more advanced and impactful future.`,
    state: 'closed',
    link: '/events/faculty-of-atlantis',
    image: {
      src: '/images/next-event.png',
      alt: 'Faculty of Atlantis (Faculty of Future) event poster',
      width: 630,
      height: 600,
    },
    dateTime: '2024-01-01',
    meta: [
      { icon: "calendar", label: 'Date', value: '2024' },
      { icon: "map-pin", label: 'Location', value: 'Mansoura University' },
      { icon: "record", label: 'Focus', value: 'Future Technologies & AI' },
    ],
  },
  {
    slug: 'lets-begin',
    title: 'Let’s Begin Network',
    description:
      `Let’s Begin Network was designed to introduce participants to the fundamental concepts and structure of networking, offering a clear and accessible understanding of one of the core fields in the world of technology. The event continued our ongoing effort to support learners by breaking down each track into simple and well-organized knowledge, helping them build confidence before choosing the path that best suits their interests.\n\n` +
      `Throughout previous months, we explored several domains including UI/UX and Mobile Application Development using Flutter and Android. Let’s Begin Network extended this journey by providing a solid overview of networks, their components, and their importance in modern digital systems. The event aimed to guide attendees through essential principles while preparing them to dive deeper into more advanced topics in the future.\n\n` +
      `By presenting the content in a structured and easy-to-follow approach, the event encouraged participants to stay curious, take notes and actively engage with the material. Let’s Begin Network reflected our commitment to helping individuals navigate the wide range of tech fields and discover the direction that aligns with their goals and aspirations.`,
    state: 'closed',
    link: '/events/lets-begin',
    image: {
      src: '/images/next-event.png',
      alt: 'Let’s Begin Network event poster',
      width: 630,
      height: 600,
    },
    dateTime: '2024-06-01',
    meta: [
      { icon: "calendar", label: 'Date', value: '2024' },
      { icon: "map-pin", label: 'Location', value: 'Mansoura University' },
      { icon: "record", label: 'Focus', value: 'Networking Fundamentals' },
    ],
  },
  {
    slug: 'fight-fear',
    title: 'Fight Fear',
    description:
      `Fight Fear offered a powerful space to confront the doubts and uncertainties that often stand between us and our goals. The event focused on understanding how fear can shape our decisions and how embracing it can open doors to new opportunities in the tech world. Through a series of informative sessions, we introduced participants to various fields and tracks they might have overlooked due to hesitation or lack of clarity.\n\n` +
      `We aimed to help attendees overcome the questions that often arise at the beginning of their academic or professional journey including whether they are on the right path. Fight Fear encouraged participants to explore different tracks, gain confidence in their choices and move closer to the future they aspire to build.\n\n` +
      `The event reflected our commitment to guiding individuals through their challenges while providing the knowledge and support needed to navigate their ambitions and discover the possibilities ahead.`,
    state: 'closed',
    link: '/events/fight-fear',
    image: {
      src: '/images/next-event.png',
      alt: 'Fight Fear motivational event poster',
      width: 630,
      height: 600,
    },
    dateTime: '2024-01-01',
    meta: [
      { icon: "calendar", label: 'Date', value: '2024' },
      { icon: "map-pin", label: 'Location', value: 'Mansoura University' },
      { icon: "record", label: 'Focus', value: 'Overcoming Career Doubts' },
    ],
  },
  {
    slug: 'magicoders',
    title: 'MagiCoders 1.0',
    description:
      `MagiCoders 1.0 introduced young participants to the world of programming through an engaging educational experience designed to spark curiosity and creativity. The event aimed to present coding as an exciting and accessible field by guiding children through an imaginative journey that showcased the evolution of technology from its earliest foundations to modern tools and innovations.\n\n` +
      `During the event, children were introduced to key moments in the history of computing following the story of early pioneers and the inventions that shaped the digital age. They explored how ideas progressed from the mechanical concepts of Charles Babbage to today’s advanced programming environments. MagiCoders also provided an overview of several major fields including game development, robotics, artificial intelligence, graphic design, video editing and frontend development. Each area was presented in a simple and interactive way to help children understand its purpose and potential impact on the future.\n\n` +
      `Through storytelling and hands-on activities the event emphasized that programming is not just numbers and code. It is a creative tool that allows young minds to build ideas, solve problems and express their imagination in meaningful ways. MagiCoders aimed to inspire children to explore technology with confidence and encourage them to see programming as a pathway to innovation and discovery.`,
    state: 'closed',
    link: '/events/magicoders',
    image: {
      src: '/images/next-event.png',
      alt: 'MagiCoders 1.0 event poster for young learners',
      width: 630,
      height: 600,
    },
    dateTime: '2024-09-17',
    meta: [
      { icon: "calendar", label: 'Date', value: 'September 17, 2024' },
      { icon: "map-pin", label: 'Location', value: 'Mansoura University & ITI' },
      { icon: "record", label: 'Sessions', value: 'Interactive & Hands-on' },
    ],
  },
  {
    slug: 'megast',
    title: 'MEGast Podcast',
    description:
      `MEGast first launched in 2022 with a debut season of 10 episodes that explored diverse and thought-provoking topics designed to spark curiosity and inspire forward thinking.\n\n` +
      `Season One featured impactful episodes such as:\n• Time Management\n• Learn How to Learn\n• A Journey Between Science and Technology\n• Theory of Everything\n• Active Learning Strategy\n• Debugging the Mind\n• How to Use Git & GitHub\n• Your Project in Steps\n\n` +
      `These episodes helped students build strong foundations by blending personal development, effective learning methods, and essential technical skills.\n\n` +
      `In 2025, the second season followed with 8 new episodes that delivered deeper insights and more practical guidance, keeping the podcast engaging and impactful.\n\n` +
      `Season Two covered topics such as:\n• From Graduation Project to Startup\n• Soft Skills: The Secret Weapon for Success in the Job Market\n• How Personal Branding in College Can Shape Your Career\n• Tech Is Not Just Code\n• How to Start in Project Management\n• How to Start Freelancing and Succeed in Content Creation\n• Business & Technology\n• CIS Roadmap: How to Succeed in Computer Science & Information Systems\n\n` +
      `Throughout both seasons, MEGast hosts field experts who share their experiences and insights, offering students valuable discussions that help them navigate their academic journey and prepare for real-world challenges.`,
    state: 'closed',
    link: '/events/megast',
    image: {
      src: '/images/next-event.png',
      alt: 'MEGast podcast official cover',
      width: 630,
      height: 600,
    },
    dateTime: '2025-01-01',
    meta: [
      { icon: "calendar", label: 'Seasons', value: '2022 & 2025' },
      { icon: "record", label: 'Episodes', value: '18 Total' },
      { icon: "record", label: 'Focus', value: 'Personal & Tech Development' },
    ],
  },
  {
    slug: 'megfair',
    title: 'MEGFAIR 1.0',
    description:
      `The first edition of MEGfair, held in May 2025, marked an important step toward bridging the gap between university life and the professional world. The event was designed to support students and graduates by connecting them directly with the job market and providing access to real companies offering valuable insights into industry expectations.\n\n` +
      `Over two days, attendees had the opportunity to meet company representatives, explore available internships and job opportunities, and understand how employers evaluate candidates and the skills they look for. MEGfair also featured a series of specialized sessions delivered by industry experts discussing promising career tracks, essential skills, and practical guidance to help participants build strong portfolios and prepare confidently for their professional journey.\n\n` +
      `The event catered to students at all stages whether they were just beginning their academic path or searching for their first career opportunity. MEGfair offered clear direction to help them explore various fields, understand what suits their interests and identify the competencies required for each path.\n\n` +
      `The success of this first edition established MEGfair as a key initiative dedicated to empowering emerging talent and linking them with real opportunities in the tech industry.`,
    state: 'closed',
    link: '/events/megfair',
    image: {
      src: '/images/next-event.png',
      alt: 'MEGFAIR 1.0 tech fair poster',
      width: 630,
      height: 600,
    },
    dateTime: '2025-05-10',
    meta: [
      { icon: "calendar", label: 'Date', value: 'May 10–11, 2025' },
      { icon: "clock", label: 'Time', value: '10:00 AM – 7:00 PM' },
      { icon: "map-pin", label: 'Location', value: 'Cairo' },
      { icon: "record", label: 'Activities', value: 'Exhibitions, Workshops & Networking' },
    ],
  },
] as const;