import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const HeroImage = styled(Img)`
  min-height: 380px;
  background-size: cover;
  background: no-repeat;
`;

const Map = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <HeroImage fluid={data.placeholderImage.childImageSharp.fluid} draggable={false} />;
}

export default Map;