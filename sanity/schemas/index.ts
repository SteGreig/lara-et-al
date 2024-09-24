// settings
import siteSettings from "./siteSettings";

// pages
import pageHome from "./pageHome";
import pageProjects from "./pageProjects";
import pageServices from "./pageServices";
import pageTeam from "./pageTeam";
import pageContact from "./pageContact";

// collections
import project from "./project";
import service from "./service";
import teamMember from "./teamMember";
import testimonial from "./testimonial";

// common
import blockContent from "./common/blockContent";
import seo from "./common/seo";
import heroHeadline from "./common/heroHeadline";
import contentCopy from "./common/contentCopy";
import contentImage from "./common/contentImage";

const schemaTypes = [
  siteSettings,

  pageHome,
  pageProjects,
  pageServices,
  pageTeam,
  pageContact,

  project,
  service,
  teamMember,
  testimonial,

  blockContent,
  seo,
  heroHeadline,
  contentCopy,
  contentImage
];

export default schemaTypes;