import styles from "../style";
import { discordGradient } from "../assets";

const JoinButton = () => {
  return (
    <div className={`${styles.flexCenter} w-[180px] h-[60px] rounded-full bg-purple-gradient p-[2px] cursor-pointer`}>
      <div className={`flex justify-left items-center px-[32px] flex-row bg-primary w-[100%] h-[100%] rounded-full p-[2px] `}>
        <img src={discordGradient} alt="discord" className="w-[30px]"/>
        <p className={`text-white text-[15px] ml-[20px]`}>Join</p>
      </div>
    </div>
  )
}

export default JoinButton