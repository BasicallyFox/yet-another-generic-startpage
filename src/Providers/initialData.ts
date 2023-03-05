import { InitialBookmarkGroup } from "@startpage/bookmarks"
import { getTheme } from "@startpage/preset"
import { SearchEngineName, SearchOptions } from "@startpage/search"

import { ShadowOptions } from "../Settings/Surface/fragments/ShadowStyle"

export const initialGeneralSettings = {
  img: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_p320aq1osj1vjxiz1o1_1280.gif?iv=344",
  title: "Yet another generic startpage",
  displayImg: true,
  font: "Quicksand",
  enableFonts: false,
}

export const initialTheme = getTheme("nord")

export const initialSearchSettings = {
  placeholder: "Search the web",
  engine: "google" as SearchEngineName,
  forwardingLookup: {
    "/": "/",
    deepl: "https://deepl.com/",
    reddit: "https://reddit.com/",
    maps: "https://maps.google.com/",
  } as SearchOptions["forwardingLookup"],
}

export const initialSurfaceSettings = {
  shadow: {
    amount: 5,
    blur: 0,
    offset: 12,
    shadow: "",
  } as ShadowOptions,
  borderRadius: 0,
  maxWidth: 1000,
}

export const initialBookmarks: InitialBookmarkGroup[] = [
  {
    label: "reddit",
    bookmarks: [
      {
        label: "r/startpages",
        url: "https://www.reddit.com/r/brasilivre",
      },
      {
        label: "r/typescript",
        url: "https://www.reddit.com/r/albedo/",
      },
      {
        label: "r/reactjs",
        url: "https://www.reddit.com/r/linuxbrasil/",
      },
    ],
  },
  {
    label: "mail",
    bookmarks: [
      {
        label: "Tutanota",
        url: "https://mail.tutanota.com",
      },
      {
        label: "Proton",
        url: "https://mail.proton.me/u/0/inbox",
      },
      {
        label: "Gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
      },
      {
        label: "Booru",
        url: "https://danbooru.donmai.us/",
      },
    ],
  },
  {
    label: "worth reading",
    bookmarks: [
      {
        label: "Anon Reports",
        url: "https://anaoreports.neocities.org/",
      },
      {
        label: "Tudocelular",
        url: "https://tudocelular.com",
      },
      {
        label: "ArchWiki",
        url: "https://wiki.archlinux.org/",
      },
    ],
  },
  {
    label: "sources",
    bookmarks: [
      {
        label: "icons",
        url: "https://feathericons.com/",
      },
      {
        label: "gif",
        url: "https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/",
      },
      {
        label: "@startpage",
        url: "https://prettycoffee.github.io/startpage",
      },
      {
        label: "author",
        url: "https://prettycoffee.github.io/",
      },
    ],
  },
]
