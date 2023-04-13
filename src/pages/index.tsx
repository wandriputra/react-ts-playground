import * as React from "react"
import Logo from '../images/logo.webp'
import Icon from "../images/icon.png"
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { Helmet } from 'react-helmet'

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={Logo} />
        <title>PSCP Cilacap | Laskar Nusakambangan</title>
        <meta name="description" content='Website resmi Klub PSCS Cilacap. PSCS Cilacap (Persatuan Sepak Bola Cilacap dan Sekitarnya) merupakan tim sepakbola yang berbasis di Kabupaten Cilacap, Jawa Tengah, Indonesia. Tim ini memiliki julukan sebagai tim Hiu Pantai Selatan juga dikenal dengan sebutan "Laskar Nusakambangan". PSCS Cilacap bermain di Liga 2. Di kompetisi musim 2017 merupakan musim dimana mereka terdegradasi ke Liga 3. Tahun 2019 mereka promosi kembali ke Liga 2 dan masih bertahan hingga saat ini.' />
      </Helmet>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="">
          <h1>Domain For Sale</h1>
        </div>
        <div className="pt-16">
          contact: <a href="mailto:wandriputra@gmail.com"> wandriputra@gmail.com</a>
        </div>
      </div>
    </>
  )
}

export default IndexPage
