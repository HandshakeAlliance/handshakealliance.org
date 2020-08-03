import React from "react";

// Components
import Hero from "components/sections/Hero";
import About from "components/sections/About";
import Exchanges from "components/sections/Exchanges";
import SEO from "components/gatsby/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
    <Exchanges />
  </>
);

export default IndexPage;
