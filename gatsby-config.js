if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = function(key) {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const privateKey = parseNewLines(process.env.FIREBASE_CONFIG_PRIVATE_KEY)
module.exports = {
  siteMetadata: {
    title: `Himadu Sirimanna`,
    description: `Himadu Sirimanna's Website.`,
    author: `@himadu`,
    siteUrl: `https://www.himadu.me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Himadu Sirimanna`,
        short_name: `Himadu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // Robots.txt
    "gatsby-plugin-robots-txt",
    // sass/scss
    `gatsby-plugin-sass`,
    // Page Load screen
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // typescript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // was jsx defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // firebase theme
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAgkfWxahbDS8goMk1dnvpeCEpFqUrZvoo",
          authDomain: "ansi-68e9a.firebaseapp.com",
          databaseURL: "https://ansi-68e9a.firebaseio.com",
          projectId: "ansi-68e9a",
          storageBucket: "ansi-68e9a.appspot.com",
          messagingSenderId: "597113660855",
          appId: "1:597113660855:web:52ff5ab6391e13e2717432",
          measurementId: "G-H9B39JD4S2",
        },
        loginPath: "/user/login",
        loginRedirectPath: "/contact",
        socialLogins: ["google"],
      },
    },

    // flamelink
    {
      resolve: "gatsby-source-flamelink",
      options: {
        firebaseConfig: {
          projectId: "ansi-68e9a",
          clientEmail:
            "firebase-adminsdk-eeooa@ansi-68e9a.iam.gserviceaccount.com",
          privateKey: privateKey,
          databaseURL: "https://ansi-68e9a.firebaseio.com",
          storageBucket: "ansi-68e9a.appspot.com",
        },
        dbType: "cf",
        environment: "production",
        content: true,
        populate: true,
        navigation: true,
        globals: false,
      },
    },
  ],
}
