import React from 'react';
import styles from '../style';
import { socialImg } from '../assets';
import { JoinButton } from './index';

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16`}>
        <div className='flex-1 flex-col'>
          <h1 className='text-gradient text-[50px] leading-none font-semibold'>
            Build Islamic Compliant Businesses. <br/>Help the Ummah.
          </h1>
          <p className='text-dimWhite py-[20px]'>Join the network designed to help young aspiring Muslim Entrepreneurs build the businesses with Islamic values at the forefront of their business model. Inspire and help the community to become the change they want to see. Create a fairer world.</p>
        </div>
        <div className={`flex-1 ${styles.flexCenter} my-5`}>
          <JoinButton/>
        </div>
        
      </div>
      
      <div className={` flex-1 ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>
        <img src={socialImg} className='rounded-[10px]'/>
      </div>

    </section>
  )
}

export default Home