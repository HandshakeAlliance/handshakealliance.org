import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Row, Col } from "@urkellabs/ucl";

const Wrapper = styled.section`
  min-height: 380px;
  padding: 125px 0 75px 0;
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Wrapper>
      <Row>
        <Col mobile={12} desktop={9.5}>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
        {/* @TODO: Hidden up to desktop */}
        <Col desktop={2.5}>
          Side Navigation
        </Col>
      </Row>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`