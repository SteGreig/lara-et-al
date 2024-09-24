// settings
import siteSettings from "./siteSettings";

// pages with standard fields
import pages from "./pages"
const standardPages = pages.filter(p => p.name !== 'pageHome');

// pages with any extra fields
import pageHome from "./pageHome";

// collections
import project from "./project";
import service from "./service";
import teamMember from "./teamMember";
import testimonial from "./testimonial";

// common
import blockContent from "./common/blockContent";
import seo from "./common/seo";

const schemaTypes = [
  siteSettings,

  ...standardPages,

  pageHome,

  project,
  service,
  teamMember,
  testimonial,

  blockContent,
  seo
];

export default schemaTypes;