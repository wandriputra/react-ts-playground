import * as React from "react"
import Logo from '../images/logo.webp'
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

// markup
const IndexPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="pb-16">
          <img src={Logo} width="300px" className="mx-auto" alt="Persatuan Sepak Bola Cilacap dan Sekitarnya, commonly known as PSCS Cilacap is a football club in Indonesia, based in Cilacap Regency, Central Java. In 2018, the club was promoted to the Liga 2 after became the runner-up of 2018 Liga 3." />
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-2  text-center place-items-center text-gray-500">
          <a href="https://www.facebook.com/PSCS-Cilacap-Official-1039210012908141"
            className="inline-flex ml-3 hover:text-[#020a6d]">
            <FaFacebook className="mr-1" /> PSCS Cilacap Official
          </a>
          <a href="https://twitter.com/PSCS_Cilacap"
            className="inline-flex ml-3 hover:text-[#020a6d]">
            <FaTwitterSquare className="mr-1" /> @PSCS_Cilacap
          </a>
          <a href="https://www.instagram.com/pscscilacap.official/"
            className="inline-flex ml-3 hover:text-[#020a6d]">
            <FaInstagram className="mr-1" /> pscscilacap.official
          </a>
          <a href="https://www.youtube.com/channel/UCQVYQZotYXO0Uv5C_AF08XA?sub_confirmation=1"
            className="inline-flex ml-3 hover:text-[#020a6d]">
            <FaYoutube className="mr-1" /> PSCS Cilacap Official
          </a>
        </div>

      </div>
    </>
  )
}

export default IndexPage
