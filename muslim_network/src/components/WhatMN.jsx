import styles from "../style";
import { aboutDetails } from "../constants/index";

import QuestionCard from "./QuestionCard";

const WhatMN = () => {
  return (
    <div className={`mn_whatmn ${styles.flexStart} my-20`} id="aboutUs">
      <div className={`flex-1 ${styles.flexStart} flex-col py-5`}>
        <h1 className="text-white text-[20px] font-bold">What is the Muslim Network?</h1>
        <p className="text-dimWhite text-[16px] font-normal my-5">We are a collective of educated Muslims looking to encourage Business creation within the Muslim community. We are hosted on discord, a free group messaging service trusted by millions.</p>
      </div>
      <div className={`flex-1 ${styles.flexCenter} flex-col p-20 text-center`}>
        <p className="text-white text-[16px] font-normal">
         تَرَى الْمُؤْمِنِينَ فِي تَرَاحُمِهِمْ وَتَوَادِّهِمْ وَتَعَاطُفِهِمْ كَمَثَلِ الْجَسَدِ إِذَا اشْتَكَى عُضْوًا تَدَاعَى لَهُ سَائِرُ جَسَدِهِ بِالسَّهَرِ وَالْحُمَّى
        </p>
        <h3 className={`text-gradient text-[25px] leading-none font-normal ${styles.paddingX} my-5`}>
          Allah's Messenger (ﷺ) said,
          "You see the believers as regards their being merciful among themselves
          and showing love among themselves and being kind, resembling one body,
          so that, if any part of the body is not well then the whole body shares the
          sleeplessness (insomnia) and fever with it."
        </h3>
        <p className="text-dimWhite text-[13px] font-normal">
          - Sahih al-Bukhari 6011
        </p>
      </div>
      <div className={`flex-1 ${styles.flexStart} flex-row justify-between pt-5`}>
        {aboutDetails.map((section) =>
         <QuestionCard title={section.title} content={section.content}/> 
         )}
      </div>
    </div>
  )
}

export default WhatMN