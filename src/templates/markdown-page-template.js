import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Row, Col, Flex, Hidden } from "@urkellabs/ucl";

const Wrapper = styled.section`
  min-height: 380px;
  padding: 125px 0 75px 0;
`;

const SideNavigation = styled.div`
  border-left: 2px solid var(--color-gray-2);
  padding: 10px;
  margin-top: 20px;
  min-height: 100px;
`;

const SideNavLink = styled.a`
  border-left: 2px solid transparent;
  margin-left: -12px;
  padding: 5px 0 5px 10px;
  color: var(--color-gray-5);

  &:hover {
    border-color: var(--color-primary);
  }
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { html, tableOfContents, frontmatter } = markdownRemark;

  return (
    <Wrapper>
      <Row>
        <Col mobile={12} desktop={9.5}>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
        {/* @TODO: Hidden up to desktop */}
        <Col desktop={2.5}>
          <SideNavigation>
            <Flex columns>
              <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
            </Flex>
          </SideNavigation>
        </Col>
      </Row>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(absolute: false, pathToSlugField: "frontmatter.path")
      frontmatter {
        slug
        title
      }
    }
  }
`