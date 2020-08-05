import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { Row, Col, Flex } from "@urkellabs/ucl";
import { MDXRenderer } from "gatsby-plugin-mdx"

const Wrapper = styled.section`
  min-height: 380px;
  padding: 125px 0 75px 0;

  /* Anchor scroll offset to account for the fixed
  navbar - add other header sizes if needed */
  h2::before {
    display: block;
    content: " ";
    margin-top: -120px;
    height: 120px;
    visibility: hidden;
    pointer-events: none;
  }
`;

const MarkdownBody = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

const Sidenav = styled.aside`
  position: sticky;
  border-left: 2px solid var(--color-gray-2);
  padding: 0px 10px;
  margin-top: 22px;
  min-height: 50px;
  overflow-y: auto;
  top: 150px;
  bottom: 0;
  right: 0;
`;

const SidebarLink = styled(Link)`
  margin-left: -12px;
  padding: 5px 0 5px 10px;
  color: var(--color-gray-5);
  font-size: 14px;

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }
`;

const BuildSidebarLink = ({ item }) => {
  let active;

  if (typeof window !== `undefined`) {
    window.location.hash === item.url && (active += " active");
  }

  return (
    <SidebarLink to={item.url} className={active}>
      {item.title}
    </SidebarLink>
  );
}

const BuildSidenavItems = ({ items }) => {
  return items.map((item, i) =>
    <BuildSidebarLink key={i} item={item} />
  );
};

export default function Template({ data }) {
  const { mdx } = data;
  const { body, tableOfContents, frontmatter } = mdx;

  return (
    <Wrapper>
      <Row>
        <Col mobile={12} desktop={9.5}>
          <MarkdownBody>
            <h1>{frontmatter.title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
          </MarkdownBody>
        </Col>
        <Col desktop={2.5}>
          <Sidenav>
            <Flex columns>
              <BuildSidenavItems items={tableOfContents.items} />
            </Flex>
          </Sidenav>
        </Col>
      </Row>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        slug
        title
      }
    }
  }
`