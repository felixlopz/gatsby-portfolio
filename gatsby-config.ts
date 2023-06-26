require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
import type { GatsbyConfig } from "gatsby";
import useYearsOfExperience from "./src/hooks/useYearsOfExperience";

const { yearsOfExperience } = useYearsOfExperience();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Félix López | Full-Stack Developer`,
    description: `Professional full-stack developer based in Venezuela with ${yearsOfExperience} years of experience working with React, Next, React Native and more!`,
    twitterUsername: `@felixlopzd`,
    image: `/src/images/site-thumbnail.png`,
    siteUrl: `https://felixlopez.xyz`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat\:300,600,800,600i`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
  ],
};

export default config;
