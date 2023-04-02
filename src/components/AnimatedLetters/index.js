import './index.scss'

const AnimatedLetters = ({ letterClass, stringArray, idx}) => {
    return (
        <span>
            {
                stringArray.map((char, i) => (
                    <span key={char + 1} className={`${letterClass} _${i + idx}`}>
                        {char}
                        </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters