// settings
import siteSettings from "./siteSettings";

// pages
import pageHome from "./pageHome";
import pageProjects from "./pageProjects";

// collections
import project from "./project";
import service from "./service";
import teamMember from "./teamMember";
import testimonial from "./testimonial";

// common
import blockContent from "./common/blockContent";
import seo from "./common/seo";
import contentCopy from "./common/contentCopy";
import contentImage from "./common/contentImage";

const schemaTypes = [
  siteSettings,

  pageHome,
  pageProjects,

  project,
  service,
  teamMember,
  testimonial,

  blockContent,
  seo,
  contentCopy,
  contentImage
];

export default schemaTypes;