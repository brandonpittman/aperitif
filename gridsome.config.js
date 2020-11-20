// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  settings: {
    // Place site-wide settings here and query them from the GraphQL layer's metadata {settings} key.
    likes: {
      language: "JavaScript",
      frameworks: ["Vue", "Gridsome", "Tailwind"],
    },
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "gridsome-plugin-svg",
    },
    {
      use: "gridsome-plugin-base-components",
    },
  ],
};
