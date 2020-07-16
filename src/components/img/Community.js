import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { breakpoint } from "@urkellabs/ucl";
import styled from "styled-components";
import Img from "gatsby-image";

const Image = styled(Img)`
  max-width: 250px;
  min-height: 150px;
  margin: 0 auto;

  ${breakpoint.tablet} {
    max-width: 200px;
  }
`;

const Community = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "community.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Image fluid={data.placeholderImage.childImageSharp.fluid} />;
}

export default Community;