import { graphql, useStaticQuery } from "gatsby"
import { MDBContainer, MDBLightbox } from "mdbreact"
import React, { useState } from "react"

const LightboxPage = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "flowers/image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "flowers/image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "flowers/image3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "flowers/image4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "flowers/image5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "flowers/image6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image7: file(relativePath: { eq: "flowers/image7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image8: file(relativePath: { eq: "flowers/image8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image9: file(relativePath: { eq: "flowers/image9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image10: file(relativePath: { eq: "flowers/image10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [heading]: any = useState([
    {
      src: data.image1.childImageSharp.fluid.src,
    },
    {
      src: data.image2.childImageSharp.fluid.src,
    },
    {
      src: data.image3.childImageSharp.fluid.src,
    },
    {
      src: data.image4.childImageSharp.fluid.src,
    },
    {
      src: data.image5.childImageSharp.fluid.src,
    },
    {
      src: data.image6.childImageSharp.fluid.src,
    },
    {
      src: data.image7.childImageSharp.fluid.src,
    },
    {
      src: data.image8.childImageSharp.fluid.src,
    },
    {
      src: data.image9.childImageSharp.fluid.src,
    },
    {
      src: data.image10.childImageSharp.fluid.src,
    },
  ])

  return (
    <MDBContainer>
      <h2 className="font-weight-bold my-5 text-center">My Photos</h2>
      <MDBLightbox md="4" images={heading} noMargins />
    </MDBContainer>
  )
}

export default LightboxPage
