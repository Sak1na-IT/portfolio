export interface Project {
  name: string; year: string; tagline: string; description: string
  role: string; tags: string[]; github?: string; live?: string; shot?: string
}
// Fill in the empty strings below with your real details.
export const profile = {
  name: 'Sakinakhanim Pashazade',
  role: 'Frontend Developer',
  school: 'Information Technology, UNEC',
  github: 'https://github.com/Sak1na-IT',
  linkedin: 'https://www.linkedin.com/in/sakinakhanim-pashazade-42b642217',
  email: 'pasayevasekine844@gmail.com', 
}
export const projects: Project[] = [
  { name: 'AzLink', year: '2026', tagline: 'Find a local service by simply describing it.',
    description: 'A local services marketplace. Natural-language search ("gel nails under 30 AZN"), provider pages with prices, reviews and free time slots, direct booking, and a full business panel for providers.',
    role: 'Design, frontend and backend', tags: ['React', 'TypeScript', 'Vite', 'Express', 'Prisma', 'JWT'],
    github: 'https://github.com/Sak1na-IT/AzLink', live: 'https://azlink.vercel.app', shot: '/screenshots/azlink.png' },
  { name: 'Relove', year: '2026', tagline: 'Second-hand fashion, given a second life.',
    description: 'A marketplace for second-hand clothes, shoes, bags and accessories: sell, swap or give away. Ivory, forest green and lime visual identity with a photo-led layout.',
    role: 'Design and development', tags: ['React', 'Vite', 'Node.js', 'Vercel', 'Render'],
    github: 'https://github.com/Sak1na-IT/relove', live: 'https://relove-az.vercel.app', shot: '/screenshots/relove.png' },
  { name: 'AzXərclə', year: '2026', tagline: 'A spending tracker that reads Azerbaijani receipts.',
    description: 'A team project: a personal spending tracker built around Azerbaijani e-kassa receipts. I built parts of the product and prepared the team presentation.',
    role: 'Team member (4 people)', tags: ['Team project', 'Receipts', 'Spending tracker'], shot: '/screenshots/azxerle.png' },
]
export const stack = [
  { group: 'Core', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Responsive design'] },
  { group: 'Backend basics', items: ['Node.js', 'Express', 'Prisma', 'JWT auth'] },
  { group: 'Workflow', items: ['Git', 'GitHub', 'Vercel', 'Render'] },
]
export const learning = [
  { title: 'PostgreSQL', note: 'Moving AzLink data to a hosted Postgres database.' },
  { title: 'Testing', note: 'Adding tests and polish to finished projects.' },
  { title: 'Mobile-first UI', note: 'Refining phone layouts, spacing and touch ergonomics.' },
  { title: 'Motion design', note: 'Interactive, premium micro-interactions.' },
]
