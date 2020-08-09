import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia } from "../components"

const ProjectsPage = ({ data }) => {
  console.log(data);
  
  const {allAirtable:{nodes:projects}}=data
  return <Wrapper>
    <Layout>
      <Projects title="our pojects" projects={projects} page />
      <Algolia />
    </Layout>
  </Wrapper>
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "customers"}}) {
      nodes {
        data {
          Name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
