import * as React from "react"
import Logo from '../images/logo.webp'

// markup
const IndexPage = () => {
  return (
    <>
      <div className="w-1/2 mx-auto items-center justify-center">
        <img src={Logo} width="300px" className="mx-auto" />
      </div>
    </>
  )
}

export default IndexPage
