if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = key => {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const privateKey = parseNewLines(process.env.FIREBASE_CONFIG_PRIVATE_KEY)
module.exports = {
  siteMetadata: {
    title: `Himadu's Website`,
    description: `Himadu Sirimannna personal website.`,
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
        name: `Himadu's Website`,
        short_name: `himadu`,
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
    // firebase theme
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDrQEupm_MrUm1eXRHVL6SJ6fHyS89Yxak",
          authDomain: "fir-32d38.firebaseapp.com",
          databaseURL: "https://fir-32d38.firebaseio.com",
          projectId: "fir-32d38",
          storageBucket: "fir-32d38.appspot.com",
          messagingSenderId: "785847414044",
          appId: "1:785847414044:web:1a7589d76c9ae57f969ed9",
          measurementId: "G-XVZXW5QXM6",
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
          projectId: "fir-32d38",
          clientEmail:
            "firebase-adminsdk-a1ck8@fir-32d38.iam.gserviceaccount.com",
          privateKey: privateKey,
          databaseURL: "https://fir-32d38.firebaseio.com",
          storageBucket: "fir-32d38.appspot.com",
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
