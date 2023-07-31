import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  AiFillHtml5
} from "react-icons/ai"

// import {
//  BiLogoFigma
// } from "react-icons/bi"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostman,
  SiSolidity,
  SiPostgresql,
  SiCanva,
  SiExpress,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function TechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
       <SiCanva />
      </Col>


{/* 
      <Col xs={4} md={2} className="tech-icons">
       <BiLogoFigma />
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
       <SiTailwindcss />
      </Col>
      
    </Row>
  );
}

export default TechStack;



/*



*/