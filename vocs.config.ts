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
            text: "Galerie",
            link: "/galerie",
            collapsed: true,
            items: [
              {
                text: "Interaktivní ukázka",
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
        horizontalPadding: "5px",
      },
      content: {
        width: "70vw",
        verticalPadding: "5px",
        horizontalPadding: "15px",
      },
      outline: {
        width: "15vw",
      },
    },
  },
});
