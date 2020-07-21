import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Components
import SEO from "components/gatsby/seo";

const Wrapper = styled.section`
  min-height: 380px;
  padding-top: 150px;
`;

const StyledLink = styled(Link)`
  color: var(--color-primary);
`;

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>Page not found</h1>
      <p>This route does not exist yet but you can return <StyledLink to="/">home</StyledLink></p>
    </Wrapper>
  </>
);

export default NotFoundPage;
