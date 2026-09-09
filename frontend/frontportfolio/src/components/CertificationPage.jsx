import React from "react";
import CertificateCard from "./uiComponents/CertificateCard";
 
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
    description:
      "Certificate of participation in an IIT Kanpur hackathon and quiz.",
  },
  {
    image: "/certificates/bharattech.png",
    name: "Bharat Tech 24-Hour Hackathon",
    description: "Certificate of participation in a 24-hour hackathon.",
  },
  {
    image: "/certificates/buildwithindia.png",
    name: "Build With India Hackathon",
    description:
      "Certificate of participation in the Build With India hackathon.",
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
    <div className="w-full px-4 sm:px-8 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* header section */}
        <div className="w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="font-bold text-lg sm:text-xl">Achievements</h2>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            My Certificates
          </h1>
        </div>
 
        <div
          className="shadow-xs shadow-black/20 rounded-2xl max-h-[720px] overflow-y-scroll
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10"
        >
          {certi.map((cert, index) => (
            <CertificateCard
              key={index}
              image={cert.image}
              name={cert.name}
              description={cert.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default CertificationPage;
 