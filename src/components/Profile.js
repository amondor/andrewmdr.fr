import React from "react";
import Projects from "./Projects";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import MyPhoto from "../images/andrewmondor.jpg";
import Moncv from "../documents/resume_andrewmondor.pdf";


let firstname = "Andrew";
let location = "Paris, France";

export default function Profile() {
  return (
    <div className="w-screen flex justify-center ">
      <div className=" w-3/5 mt-12">
        <div>
          <img
            src={MyPhoto}
            alt="horse"
            className="rounded-full "
            width={100}
          />
        </div>
        <div className="text-left  text-zinc-500 mt-5">
          <h1 className="">Hi there, I'm {firstname} 👋🏽</h1>
          <h2 className="title mt-10">
            Freelance <u> Fullstack Web Developer. </u> <br />
            This is my personal site, where you will find my projects and information.
            
          </h2>
          <p className="">{location}</p>
          <div className="flex  w-48 justify-between icons mt-5 gap-1 text-zinc-500">
            <a href="https://github.com/amondor" target="_blank">
              <FaGithub />
            </a>
            <a href={Moncv} target="_blank">
              <FaFileAlt />
            </a>
            <a href="https://www.linkedin.com/in/andrew-mondor/" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://www.malt.fr/profile/andrewmondor" target="_blank">
              <FaSuitcase />
            </a>
          </div>
        </div>
        {/* <Projects /> */}
      </div>
    </div>
  );
}
