export const siteConfig = {
  author: 'Seismic Enterprises',
  title: 'Rose Portfolio',
  subtitle: 'My Personal Portfolio',
  description: 'Welcome to my personal portfolio',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'arty@duck.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/Roseyyx',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: 'https://x.com/Rosey_x_x',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/rose-van-hoepen-644160303/',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Youtube',
      href: 'https://www.youtube.com/@ArtEdits',
      icon: 'i-simple-icons-youtube',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
      {
        text: 'Resume',
        // path to resume file
        href: '/resume.pdf',
      }
    ],
  },
  page: {
    blogLinks: [
    ],
  },
  footer: {
    navLinks: [
    ],
  },
}

export default siteConfig
