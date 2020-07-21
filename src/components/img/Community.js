import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Image = styled(Img)`
  max-width: 250px;
  min-height: 150px;
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

  return <Image fluid={data.placeholderImage.childImageSharp.fluid} draggable={false} />;
}

export default Community;