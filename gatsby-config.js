let path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

let plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
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
      icon: `src/images/logo.png`,
    },
  },
  {
    resolve: `gatsby-plugin-root-import`,
    options: {
      src: path.join(__dirname, `src`),
      components: path.join(__dirname, `src/components`),
      images: path.join(__dirname, `src/images`)
    }
  },
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/components/gatsby/layout.js`)
    }
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Open Sans`,
          variants: [`600`, `500`, `400`]
        }
      ]
    }
  },
  {
    resolve: `gatsby-plugin-html-attributes`,
    options: {
      'data-theme': `light`
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            icon: false
          },
        },
      ],
    },
  },
]

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Handshakealliance.org`,
    description: `Handshake is a decentralized naming and certificate authority where every peer is validating and in charge of managing the root DNS naming zone`,
    url: `https://handshakealliance.org`,
    siteUrl: `https://handshakealliance.org`,
    author: `@HandshakeAlliance`
  },
  plugins: plugins
};
