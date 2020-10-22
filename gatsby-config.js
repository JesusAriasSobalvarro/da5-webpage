module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galeria`,
        path: `${__dirname}/src/images/Galeria`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `plantygodnia`,
        path: `${__dirname}/src/pages/PlanTygodnia/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/pages/Home/`,
      },
    },
    // {
    //   resolve: 'gatsby-source-firestore',
    //   options: {
    //     credential: require("./da5-webpage-firebase-adminsdk-eslu8-d154eeed97.json"),
    //     types: [
    //       {
    //         type: 'WeeklyEvent',
    //         collection: 'weeklyPlan',
    //         map: event => ({
    //           day: event.day,
    //           hour: event.hour,
    //           name: event.name
    //         }),
    //       }
 
          // ,
          // {
          //   type: 'Author',
          //   collection: 'authors',
          //   map: doc => ({
          //     name: doc.name,
          //     country: doc.country,
          //     books___NODE: doc.books.map(book => book.id),
          //   }),
          // },
        //],
      //},
    //}
    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /SVGs/
          }
        }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    }
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
