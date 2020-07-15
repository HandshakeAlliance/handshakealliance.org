import React from "react"
import { css } from "styled-components"
import { GlobalStyles } from "@urkellabs/ucl"

// Components
import Navbar from "components/Navbar"

// @TODO: move to its own file and decide on final theme color palette
const lightColors = css`
  --color-black: hsl(0, 0%, 0%);
  --color-white: hsl(0, 0%, 100%);
  --color-gray-1: hsl(0, 0%, 100%);
  --color-gray-2: hsl(0, 0%, 95%);
  --color-gray-3: hsl(0, 0%, 85%);
  --color-gray-4: hsl(0, 0%, 70%);
  --color-gray-5: hsl(0, 0%, 55%);
  --color-gray-6: hsl(0, 0%, 40%);
  --color-gray-7: hsl(0, 0%, 30%);
  --color-gray-8: hsl(0, 0%, 15%);
  --color-gray-9: hsl(0, 0%, 0%);
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles fontFamily="'Inter', sans-serf" lightColors={lightColors} />
      <Navbar />
      {/* @TODO: add content wrapper here for children */}
      <main>{children}</main>
    </>
  )
}

export default Layout
