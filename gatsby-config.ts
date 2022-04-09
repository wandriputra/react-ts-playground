import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `PSCS Official`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass", {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "aaa"
      }
    }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
  ]
};

export default config;
