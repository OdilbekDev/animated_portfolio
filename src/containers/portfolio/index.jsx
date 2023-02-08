import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import {BsInfoCircleFill} from 'react-icons/bs'

function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>

      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

    </section>
  )
}

export default Portfolio