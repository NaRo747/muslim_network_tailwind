import styles from "../style";

import { discordGray, instagramGray, xGray, ytGray } from "../assets";

const Social = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingX} justify-between flex-row w-full h-[60px] xl:max-w-[1280px] w-full`}>
      <img src={discordGray} alt="discordIcon" className="h-[60px]"/>
      <img src={instagramGray} alt="instagramIcon" className="h-[60px]"/>
      <img src={xGray} alt="xIcon" className="h-[60px]"/>
      <img src={ytGray} alt="ytIcon" className="h-[60px]"/>
    </div>
  )
}

export default Social