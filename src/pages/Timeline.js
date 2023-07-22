import React, { useEffect } from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool , MdVaccines} from "react-icons/md";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiPostman } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBook , BsFillStarFill} from "react-icons/bs";
import {GrMysql} from "react-icons/gr"

export const Timeline = () => {
  

  return (
    <>
      <div className="section mainsection">
        <h1 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h1>
        <VerticalTimeline lineColor={"#00FFFF"}>
          <VerticalTimelineElement
            date={"Oct 2022 - Apr 2023"}
            contentStyle={{
              boxShadow: `white`,
              border: "3px solid blue",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  blue",
            }}
            iconStyle={{
              border: ` 3px solid darkblue`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<MdSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              GUVI IIT MADRAS
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Chennai
              
            </h4>
            <p data-aos="fade-right">
              Studied
              Fullstack developer Program / MERN Stack
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"May 2021 - Jun 2022"}
            contentStyle={{
                boxShadow: `white`,
                border: "3px solid blue",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  blue",
              }}
              iconStyle={{
                border: ` 3px solid darkblue`,
                backgroundColor: `white`,
                color: `crimson`,
              }}
            icon={<BsBook />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
             Ashirwad International CBSE School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Gudiyatham
            </h4>
            <p data-aos="fade-right">
            Worked as a EVS Teacher ( Ashirwad International CBSE School )
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"Nov 2016 - Dec 2020"}
            contentStyle={{
                boxShadow: `white`,
                border: "3px solid blue",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  blue",
              }}
              iconStyle={{
                border: ` 3px solid darkblue`,
                backgroundColor: `white`,
                color: `crimson`,
              }}
            icon={<MdVaccines/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              ARC International Fertility Center
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Chennai
            </h4>
            <p data-aos="fade-right">
            Worked as a Staff Nurse ( Fertility Dep )
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jul 2015 - Apr 2017"}
            contentStyle={{
                boxShadow: `white`,
                border: "3px solid blue",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  blue",
              }}
              iconStyle={{
                border: ` 3px solid darkblue`,
                backgroundColor: `white`,
                color: `crimson`,
              }}
            icon={<MdSchool/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Abhijay institute of Health Science 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Chennai
            </h4>
            <p data-aos="fade-right">
              Studied Dip.in Practical Nursing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2011 - Apr 2013"}
            contentStyle={{
                boxShadow: `white`,
                border: "3px solid blue",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  blue",
              }}
              iconStyle={{
                border: ` 3px solid darkblue`,
                backgroundColor: `white`,
                color: `crimson`,
              }}
            icon={<MdSchool/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Government Girls Higher Secondary School 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Gudiyattam
            </h4>
            <p data-aos="fade-right">
              Studied HSC History <br/> State Board
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2010 - Apr 2011"}
            contentStyle={{
                boxShadow: `white`,
                border: "3px solid blue",
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  blue",
              }}
              iconStyle={{
                border: ` 3px solid darkblue`,
                backgroundColor: `white`,
                color: `crimson`,
              }}
            icon={<MdSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Government High School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Kallapadi
            </h4>
            <p data-aos="fade-right">
              Studied SSC State Board 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<BsFillStarFill />}
            iconStyle={{
                border: ` 3px solid darkblue`,
                backgroundColor: `white`,
                color: `crimson`,
              }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};