import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>Constrained / default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="Food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <h2>Gatsby Image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Images
