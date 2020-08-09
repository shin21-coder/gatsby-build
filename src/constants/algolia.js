const airtableQuery = `
{
  allAirtable(filter: {table: {eq: "projects"}}) {
    nodes {
      id
      data {
        date
        Name
        type
        image {
          localFiles {
            childImageSharp {
              fluid {
                src
                aspectRatio
                base64
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  }
}
`
function pageToAlgoliaRecord({ id, data: { Name, type, date, image } })
{
  return {
    objectID: id, Name, type, date, image: { ...image.localFiles[0].childImageSharp.fluid }
  }
}
const queries = [
  {
    query: airtableQuery,
    transformer:({data})=>data.allAirtable.nodes.map(pageToAlgoliaRecord)
  }
]


module.exports=queries