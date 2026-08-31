import React from 'react'

const CertificateCard = ({index,image,name,description}) => {
  return (
    <>
      <div className=' shadow-sm shadow-black/20 rounded-2xl p-4 w-100  ml-10 mt-10 '>
        <div>
          <img className='h-50 w-full p-2 ' src={image} name="Certimage" />
          <label htmlFor="Certimage" id='Certimage'>{name}</label>
          </div>
          <div>{description}</div>
      </div>
    </>
  )
}

export default CertificateCard



