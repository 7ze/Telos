import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Shinu Donney",
  DESCRIPTION: "Welcome to my personal website and portfolio, where I showcase my projects and writings.",
  AUTHOR: "Shinu Donney",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "email.shinudonney@gmail.com",
    HREF: "mailto:email.shinudonney@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "7ze",
    HREF: "https://github.com/7ze"
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Shinu Donney",
    HREF: "https://x.com/donney7ze",
  },
]

