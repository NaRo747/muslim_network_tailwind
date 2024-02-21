import styles from './style'

import { Navbar, Home, Social, WhatMN, Join, Testimonials, Footer } from './components'; 

const App = () => {
  return (
    <div className='gradient__bg w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={` ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Home/>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Social/>
          <WhatMN/>
          <Join/>
          <Testimonials/>
          <Footer/>
        </div>
      </div>


    </div>


  )
}

export default App