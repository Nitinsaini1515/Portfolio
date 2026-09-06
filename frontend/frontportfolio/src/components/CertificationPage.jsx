import React from 'react'

import CertificateCard from './uiComponents/CertificateCard'
const certi = [
  {
    image: "/certificates/dell.png",
    name: "Dell Technologies Course",
    description: "Certificate of completion for a Dell Technologies course.",
  },
  {
    image: "/certificates/electroquad.png",
    name: "ElectroQuad Hackathon",
    description: "Certificate of participation in a hackathon.",
  },
  {
    image: "/certificates/codered.png",
    name: "IIT Kanpur Hackathon & Quiz",
    description: "Certificate of participation in an IIT Kanpur hackathon and quiz.",
  },
  {
    image: "/certificates/bharattech.png",
    name: "Bharat Tech 24-Hour Hackathon",
    description: "Certificate of participation in a 24-hour hackathon.",
  },
  {
    image: "/certificates/buildwithindia.png",
    name: "Build With India Hackathon",
    description: "Certificate of participation in the Build With India hackathon.",
  },
  {
    image: "/certificates/codefest.png",
    name: "CodeFest Hackathon",
    description: "Certificate of participation in the CodeFest hackathon.",
  },
  {
    image: "/certificates/comp2.png",
    name: "Hackathon",
    description: "Certificate of participation in a hackathon.",
  },
  {
    image: "/certificates/composite.png",
    name: "Technology Event",
    description: "Certificate of participation in a technology event.",
  },
  {
    image: "/certificates/Eureka.png",
    name: "Eureka Idea Pitch Competition",
    description: "Certificate of participation in an idea pitch competition.",
  },
  {
    image: "/certificates/founder.png",
    name: "Founder Idea Pitch Competition",
    description: "Certificate of participation in an idea pitch competition.",
  },
  {
    image: "/certificates/infosys.png",
    name: "Infosys Course",
    description: "Certificate of completion for an Infosys course.",
  },
  {
    image: "/certificates/saviskar.png",
    name: "Saviskar 24-Hour Hackathon",
    description: "Certificate of participation in a 24-hour hackathon.",
  },
];
const CertificationPage = () => {
  return (
    <>
    <div className='flex w-370 ml-5 justify-center items-center'>
  
      <div className='h-200  '>
{/* header section */}
<div className='w-150  h-30 ml-65 '>
  <h2 className='font-bold text-xl '>Achievements</h2>
  <h1 className='font-bold text-6xl'>My Certificates</h1>
</div>

<div className='  shadow-xs h-170 overflow-y-scroll shadow-black/20 flex flex-wrap mt-10 '>
{certi.map((certi,index)=>{
return(
<CertificateCard
key = {index}
image = {certi.image}
name = {certi.name}
description={certi.description}
/>

)

})}

</div>
      </div>
        </div>
    </>
  )
}

export default CertificationPage
