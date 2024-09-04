import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'Seismic Enterprises',
    projects: [
      {
        text: 'Homelab',
        description: 'My custom homelab running Debian to host this website.',
        icon: 'i-carbon-campsite',
        href: '/',
      },
      {
        text: 'CS:GO Software (Private)',
        description: 'CS:GO legacy software that enhances your gameplay. Written in C++ and ASM',
        icon: 'i-carbon-campsite',
        href: '/',
      },
    ],
  },
  {
    title: 'My Projects',
    projects: [
      {
        text: 'Anti Cheat Solutions',
        description: 'My custom anti cheat solutions for any x64 game. Written in C++',
        icon: 'i-carbon-campsite',
        href: 'https://github.com/Roseyyx/Seismic-AntiCheat-Solutions',
      },
      {
        text: 'Password Manager',
        description: 'Password Manager written in GoLang',
        icon: 'i-carbon-campsite',
        href: 'https://github.com/Roseyyx/SeismicSecurity',
      },
      {
        text: 'HWID Spoofer',
        description: 'HWID Spoofer using SMBIOS and various other methods to spoof your HWID. Written in C++',
        icon: 'i-carbon-campsite',
        href: 'https://github.com/Roseyyx/Spoofer',
      },
      {
        text: 'Portfolio',
        description: 'This website! Built with Astro, Vue.js and Unocss',
        icon: 'i-carbon-campsite',
        href: '/',
      },
    ],
  },
  {
    title: 'Freelance',
    projects: [
      {
        text: 'Mission Control',
        description: 'A custom written pterodactyl alternative for game server hosting. Written in GoLang and Python',
        icon: 'i-carbon-campsite',
        href: '/',
      },
      {
        text: 'Pterodactyl Security Plugin',
        description: 'A custom written security plugin for pterodactyl. Written in PHP',
        icon: 'i-carbon-campsite',
        href: '/',
      },
    ],
  },
]
