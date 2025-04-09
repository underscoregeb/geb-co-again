import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import QuartSeparator from "../components/quartSeparator/quartSeparator";
import ProfileCard from "../components/profileCard/profileCard";


function Page() {

  // List of greetings
  const greetings = [
    "/profile",
    "/profile",
    "Hidden Page!",
    "Appendix",
    "Appendix",
    "Appendix",
    "Appendix",
    "Cute CSS!",
    "Magic!",
    "Magic!",
    "The Profile Section",
    "\"not war?\"",
    "\"not war?\"",
    "\"not war?\"",
    "hi :3",
    "hi :3"
  ];

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <>
      <div className='doc-content'>
        <h1 className="instrument-serif-regular">{greeting}</h1>
        <p>
          Ad duis veniam minim sint elit sint minim ipsum dolor minim pariatur. Dolor nostrud occaecat ut. Sunt esse cupidatat enim sint incididunt veniam sit nulla officia aliquip est eu irure. Esse tempor veniam duis velit in ex. Fugiat id ad consectetur commodo pariatur occaecat ea laborum mollit velit proident labore sit ipsum aliqua. Do commodo exercitation
        </p>
        <QuartSeparator speed={3000} quarts={3} />
        <h2>
          this is a hidden page :3
        </h2>

        <ProfileCard title="geb" pronouns="they/them" pfp="public/avatar.png" description="hiiiii"/>

        <p>
          Enim laborum dolore laboris velit in fugiat ullamco elit enim. Commodo aliqua amet nisi veniam enim nisi ullamco est nisi exercitation eu. Labore nulla minim consequat laboris. Ad deserunt in irure Lorem ullamco in minim adipisicing aute qui velit reprehenderit ullamco.
        </p>

        <h2>
          why <Link to="/">geb.company</Link>?
        </h2>
        <p>
          i've gone by <b>geb</b> for a while and thought this was a fun domain to make up a site for! it's probably gonna change once my lease runs out. i took inspiration from <a href="https://thebrowser.company/">The Browser Company</a> for the name itself. the landers on this site are meant to be kinda dystopian and over-saasified.
        </p>
        <p>
          aside from this React site, i've got some other random services also hosted on the domain. <Link to='/services'>see all services</Link>
        </p>
      </div>
    </>
  );
}

export default Page;
