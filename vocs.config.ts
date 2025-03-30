import { defineConfig } from "vocs";

export default defineConfig({
  description:
    "Dokumentace k webu uat.sk a pluginům pro správu obsahu v administraci",
  title: "SSUPAT Dokumentace",
  sidebar: {
    "/": [
      {
        text: "Přehled",
        link: "/",
      },
      {
        text: "Pluginy",
        collapsed: true,
        items: [
          {
            text: "Odkazy",
            link: "/odkazy",
          },
          {
            text: "Galerie",
            link: "/galerie",
            collapsed: true,
            items: [
              {
                text: "Interaktivní ukázka galerie",
                link: "/galerie/preview",
              },
            ],
          },
        ],
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
