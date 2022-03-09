const ROUTES = {
  ABOUT: {
    INITIAL: "/o-mne",
    ABOUT: "/o-mne",
  },
  BLOG: {
    INITIAL: "/blog",
    BLOG: "/blog",
    BLOG_POST: "/blog/:postId",
  },
  CONTACT: {
    INITIAL: "/kontakt",
    CONTACT: "/kontakt",
  },
  DIET: {
    INITIAL: "/jidelnicek-na-miru",
    DIET: "/jidelnicek-na-miru",
  },
  HOME: {
    INITIAL: "/",
    HOME: "/",
  },
  QANDA: {
    INITIAL: "/qna",
    QANDA: "/qna",
  },
  CONDITIONS: {
    INITIAL: "/podminky",
    BUSINESS: "/podminky/obchodni",
    OF_USE: "/podminky/uziti",
  },
  NOT_FOUND: {
    INITIAL: "/nenalezeno",
    NOT_FOUND: "/nenalezeno",
  },
}

export default ROUTES
