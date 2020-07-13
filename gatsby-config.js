let path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

let plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Handshakealliance.org`,
      short_name: `Handshakealliance.org`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#693AFA`,
      display: `standalone`,
      icon: `src/images/ha-logo.png`,
    },
  },
  {
    resolve: "gatsby-plugin-root-import",
    options: {
      src: path.join(__dirname, "src"),
      components: path.join(__dirname, "src/components"),
      images: path.join(__dirname, "src/images")
    }
  },
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/components/layout.js`)
    }
  },
]

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "Handshakealliance.org",
    description: `Handshake is a decentralized naming and certificate authority where every peer is validating and in charge of managing the root DNS naming zone`,
    url: `https://handshakealliance.org`,
    siteUrl: `https://handshakealliance.org`,
    author: `@HandshakeAlliance`
  },
  plugins: plugins
};
