import SectionContainer from '../SectionContainer/SectionContainer';

import classes from './Resume.scss';

const Resume = ({ setActiveSection }) => {
  return (
    <SectionContainer
      id='resume'
      setActiveSection={setActiveSection}
    >
      <div className={classes.category}>
        <div className={classes.heading}>
          <h2>Career</h2>
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <h3>Accusoft Corporation</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Senior Software Engineer II / Scrum Master</em>
              <span className={classes.bullet}>&bull;</span>
              <span>September 2015 - Current</span>
            </p>
            <p>As a senior software engineer, I work daily in a continuously delivered React and Node.js microservice environment. Regularly, I take the lead on designing or implementing new functionality for our SaaS-based applications. I continuously work to improve the quality of my code through extensive unit and integration testing, as well as employing functional programming techniques and good coding patterns. Additionally, I explore DevOps related tasks that can help improve the quality of life for the engineering team.</p>
            <p>As a scrum master, I facilitate and create opportunities each sprint for the team to succeed. I consistently research, analyze, and experiment to ensure our Scrum process runs smoothly and without interruption so the team can focus on reaching their goals.</p>
          </div>

          <div className={classes.item}>
            <h3>Intervest Construction, Inc.</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Web Administrator / Developer</em>
              <span className={classes.bullet}>&bull;</span>
              <span>April 2013 - September 2015</span>
            </p>
            <p>As a web administrator, I maintained a cloud-hosted LAMP stack which hosted approximately a dozen separate sites. I engineered solutions for our cloud-hosted stack to securely communicate with locally hosted resources in an efficient manner.</p>
            <p>As a web developer, I engineered a custom content management system (CMS) in PHP to showcase our home inventory on the web. Through storyboarding and market research, I designed a visually stunning web front-end. The front-end was built on top of the CMS in HTML 5 and JavaScript. Additionally, I developed standalone web applications for large touchscreen kiosks in several of our physical sales centers.</p>
          </div>

          <div className={classes.item}>
            <h3>Illinois State University</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Web Applications Developer</em>
              <span className={classes.bullet}>&bull;</span>
              <span>February 2008 - April 2013</span>
            </p>
            <p>My success as a student web developer translated into a full-time web applications developer upon my graduation from Illinois State. I continued to iterate and improve the Help Desk knowledge base site while I added a variety of departmental websites to my development responsibilities. As I became more comfortable in my developer role, I began to mentor staff members and student workers of the Help Desk who were also working on web projects.</p>
            <hr />
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>Student Web Developer</em>
              <span className={classes.bullet}>&bull;</span>
              <span>October 2005 - February 2008</span>
            </p>
            <p>As a student web developer, I took on the daunting task of developing a brand new knowledge base content management system (CMS) for the University Computer Help Desk. I utilized PHP for the back-end and designed an HTML and JavaScript front-end. During my time as a student, I experimented and researched constantly, leading to a complete overhaul of the front-end UI within one year.</p>
          </div>
        </div>
      </div>

      <div className={classes.category}>
        <div className={classes.heading}>
          <h2>Education</h2>
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <h3>Illinois State University</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>B.S. Technology</em>
              <span className={classes.bullet}>&bull;</span>
              <span>Graduated 2007</span>
            </p>
            <p>I studied Technology at Illinois State University, because I enjoyed learning about a wide variety of topics. The technology program offered opportunities to explore computer operating systems and hardware, networking, electronics, and programming, instead of focusing on just one specific area. This allowed me to focus on the topics I found the most interesting as I moved into my professional career, while also having a well-rounded background to critically attack any problem I encountered.</p>
            <p>I participated in several activities and societies while at Illinois State. I am an alumnus of Phi Mu Alpha Sinfonia, and I was a member of the drumline in the Big Red Marching Machine.</p>
          </div>
        </div>
      </div>

      <div className={classes.category}>
        <div className={classes.heading}>
          <h2>Patents</h2>
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <h3>Methods and Apparatus for Supporting the Display and Editing of OOXML Document Content Using a Web Browser</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>US 16/359,739</em>
              <span className={classes.bullet}>&bull;</span>
              <span>Patent Pending</span>
            </p>
            <p>Patent relates to document storage, display and/or editing and, more particularly, to methods and apparatus which allow a device to display and edit a document using a Web browser, without having to support direct OOXML format document rendering and editing.</p>
          </div>
        </div>
      </div>

      <div className={classes.category}>
        <div className={classes.heading}>
          <h2>Certifications</h2>
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <h3>Zend Certified Engineer</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>#ZEND004465</em>
              <span className={classes.bullet}>&bull;</span>
              <span>March 14, 2007</span>
            </p>
            <p>The Zend Certified PHP Engineer is an industry-wide standard that recognizes PHP expertise and is a measure of distinction that employers use to evaluate prospective employees.</p>
          </div>

          <div className={classes.item}>
            <h3>CompTIA Network+ Certified</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>#W6WPDLLBYE41QMY5</em>
              <span className={classes.bullet}>&bull;</span>
              <span>April 7, 2006</span>
            </p>
            <p>Network+ ensures an IT professional has the knowledge and skills to design and implement functional networks, configure, manage, and maintain essential network devices, implement network security, standards, and protocols, and troubleshoot network problems.</p>
          </div>

          <div className={classes.item}>
            <h3>CompTIA A+ Certified</h3>
            <p
              aria-level='4'
              className={classes.subheading}
              role='heading'
            >
              <em>#C4EZM4Y1X24EYP0Z</em>
              <span className={classes.bullet}>&bull;</span>
              <span>June 10, 2005</span>
            </p>
            <p>CompTIA A+ certified professionals are proven problem solvers. They support today's core technologies from security to cloud to data management and more. CompTIA A+ is the industry standard for launching IT careers into today's digital world.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Resume;