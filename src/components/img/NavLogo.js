import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const NavLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ha-logo.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.file.childImageSharp.fixed} alt="HA Logo" />;
}

export default NavLogo;