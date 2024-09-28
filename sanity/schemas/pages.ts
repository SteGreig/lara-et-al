import pageStandard from "./common/pageStandard";

const pages = [
  {
    title: "Home Page",
    name: "pageHome",
    menuTitle: "Home",
    slug: "",
    ...pageStandard
  },
  {
    title: "Services Page",
    name: "pageServices",
    menuTitle: "Services",
    slug: "services",
    ...pageStandard
  },
  {
    title: "Projects Page",
    name: "pageProjects",
    menuTitle: "Projects",
    slug: "projects",
    ...pageStandard
  },
  {
    title: "Team Page",
    name: "pageTeam",
    menuTitle: "Team",
    slug: "team",
    ...pageStandard
  },
  {
    title: "Contact Page",
    name: "pageContact",
    menuTitle: "Contact",
    slug: "contact",
    ...pageStandard
  }
]

export default pages;