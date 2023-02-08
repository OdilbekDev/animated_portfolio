import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'


const personalDetails = [
  {
    label: "Name",
    value: "Odilbek Shavkatov",
  },
  {
    label: "Age",
    value: "17",
  },
  {
    label: "Address",
    value: "Andijan, Uzbekistan",
  },
  {
    label: "Email",
    value: "desmon.programmer@gmail.com",
  },
  {
    label: "Contact No",
    value: "+998 905279161",
  },
];

const jobSummary =
  "A fullstack developer with 3 years of experience, I am passionate about programming and developing software solutions. My skillset includes a wide range of technologies including HTML/CSS, JavaScript, React, Python, Django and PostgreSql. I have experience in both front-end and back-end development as well as working with frameworks such as DRF and React. I have also worked on projects involving API integrations and have a good understanding of web security principles. ";


function About() {
  return (
    <section id='about' className='about'>

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'><Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-900px)'
          }}

          end={{
            transform: 'translatex(0px)'
          }}
        >
          <h3>Fullstack Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}

            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate></div>
        <div className='about__content__servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)'
            }}

            end={{
              transform: 'translatex(0px)'
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiAndroid size={60} color='var(--yellow-theme-main-color)' />

              </div>
              <div>
                <FaDatabase size={60} color='var(--yellow-theme-main-color)' />

              </div>
              <div>
                <DiApple size={60} color='var(--yellow-theme-main-color)' />

              </div>
            </div>
          </Animate>
        </div>

      </div>
    </section>
  )
}

export default About;