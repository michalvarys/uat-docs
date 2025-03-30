import { defineConfig } from "vocs";

export default defineConfig({
  description:
    "Dokumentace k webu uat.sk a pluginům pro správu obsahu v administraci",
  title: "SSUPAT Dokumentace",
  sidebar: {
    "/": [
      {
        text: "Rozcestník",
        link: "/",
      },
      {
        text: "Pluginy",
        collapsed: false,
        items: [
          {
            text: "Odkazy",
            link: "/pluginy/odkazy",
          },
          {
            text: "Galerie",
            link: "/pluginy/galerie",
            collapsed: true,
            items: [
              {
                text: "Interaktivní ukázka galerie",
                link: "/pluginy/galerie/preview",
              },
            ],
          },
          {
            text: "Seznam karet",
            link: "/pluginy/karty",
          },
          {
            text: "Accordion",
            link: "/pluginy/accordion",
          },
          {
            text: "HTML kód",
            link: "/pluginy/code",
          },
          {
            text: "Záložky",
            link: "/pluginy/tabs",
          },
        ],
      },
      {
        text: "Nastavení",
        link: "/nastaveni",
      },
    ],
  },
  rootDir: ".",
  theme: {
    colorScheme: "light",
    accentColor: "orange",
    variables: {
      sidebar: {
        width: "15vw",
        verticalPadding: "5px",
        horizontalPadding: "20px",
      },
      content: {
        width: "70vw",
        verticalPadding: "5px",
        horizontalPadding: "20px",
      },
      outline: {
        width: "15vw",
      },
    },
  },
  vite: {
    server: {
      allowedHosts: ["uat-docs.varyshop.eu", "docs.uat.sk", "localhost"],
    },
  },
});
