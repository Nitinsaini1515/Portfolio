import React from 'react'
import CertificateCard from './uiComponents/CertificateCard'
const certi=[
  {
    "image":"image.png",
    "name":"Participant",
    "description":"this is my participation certificate",
  },
  {
    "image":"image.png",
    "name":"Participant",
    "description":"this is my participation certificate",
  },
  {
    "image":"image.png",
    "name":"Participant",
    "description":"this is my participation certificate",
  },
  {
    "image":"image.png",
    "name":"Participant",
    "description":"this is my participation certificate",
  },
  {
    "image":"image.png",
    "name":"Participant",
    "description":"this is my participation certificate",
  }
]
const CertificationPage = () => {
  return (
    <>
    <div>
  
      <div className='h-200'>
{/* header section */}
<div className='w-150  h-30 ml-65 mt-40'>
  <h2 className='font-bold text-xl '>Achievements</h2>
  <h1 className='font-bold text-6xl'>My Certificates</h1>
</div>

<div className='gap-10 shadow-sm h-170 shadow-black/20 flex flex-wrap mt-10 w-350 ml-20'>
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
