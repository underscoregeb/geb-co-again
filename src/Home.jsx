
import { Link } from "react-router-dom";
import QuartSeparator from "./components/quartSeparator/quartSeparator";

function Page() {
  return (
    <>
      <div className='doc-content'>
        <h1 className="instrument-serif-regular">Cupidatat laborum aliqua pariatur.</h1>
        <p>
          Ad duis veniam minim sint elit sint minim ipsum dolor minim pariatur. Dolor nostrud occaecat ut. Sunt esse cupidatat enim sint incididunt veniam sit nulla officia aliquip est eu irure. Esse tempor veniam duis velit in ex. Fugiat id ad consectetur commodo pariatur occaecat ea laborum mollit velit proident labore sit ipsum aliqua. Do commodo exercitation
        </p>
          <QuartSeparator speed={3000} quarts={3} />
        <h2>
          hiiiiiiiii :3
        </h2>
        <p>
          Enim laborum dolore laboris velit in fugiat ullamco elit enim. Commodo aliqua amet nisi veniam enim nisi ullamco est nisi exercitation eu. Labore nulla minim consequat laboris. Ad deserunt in irure Lorem ullamco in minim adipisicing aute qui velit reprehenderit ullamco.
        </p>
        <p>
          Duis esse in fugiat velit enim deserunt proident reprehenderit enim officia aute consectetur exercitation officia ullamco. Tempor excepteur officia proident ea consectetur ullamco. Eiusmod irure nulla pariatur exercitation anim sit aliqua cillum. Laboris duis ex in culpa sint adipisicing laborum anim. Mollit nisi aliquip minim veniam non consequat pariatur magna non ex voluptate id.
        </p>
        <p>
          <Link to='/services'>see all services</Link>
        </p>
      </div>
    </>
  )
}

export default Page
