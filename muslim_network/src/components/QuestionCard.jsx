import styles from "../style";

const QuestionCard = ({title, content}) => {
  return (
    <div className={`${styles.flexStart} flex-col px-5`}>
        <h1 className="text-white text-[20px] font-medium">
            {title}
        </h1>
        <p className="my-5 text-dimWhite text-[16px] font-normal">
            {content}
        </p>
    </div>
  )
}

export default QuestionCard