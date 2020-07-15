import React from "react";

// Components
import Hero from "components/sections/Hero";
import About from "components/sections/About";
import SEO from "components/gatsby/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
  </>
);

export default IndexPage;
