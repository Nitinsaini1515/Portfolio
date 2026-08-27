import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const code = `const Nitin = {
  name: "Nitin saini",
  role: "Developer",
  skills: ["Mern","C++"],
  passion: "Building ideas"
}`;



const CodeCard = () => {
  return (
    <>

     <div className="-ml-10 relative float-animation w-55 bg-black/90 height font-medium flex flex-col justify-center items-center ">
      {/* dots div */}
<div>
  <div></div>
  <div></div>
  <div></div>
</div>

{/* textdiv */}

<SyntaxHighlighter language ="javascript"
style ={vscDarkPlus}
customStyle ={{
  background:"none",
  padding :0,
  margin :0,
  fontSize:"14px",
}}
>
  {code}
</SyntaxHighlighter>
     </div>

    </>
  )
}

export default CodeCard
