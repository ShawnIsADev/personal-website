import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faReact, faGit, faAndroid} from '@fortawesome/free-brands-svg-icons'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setLetterClass('text-animate-hover')
    
}, [])


    return(
        
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    stringArray={['A', 'b', 'o', 'u','t', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    Im a Front-End Developer located in Pennsylvania. I have a serious passion for UI effects,
                    animations and creating intuitive, dynamic user experiences.
                 </p>
                <p> I love to work on challenging projects.</p>
                <p>I'm quietly confident, naturally curious, and I enjoy the road to improving my problem thinkings skills every day. </p>
                <i style={{color:"#00f2ea", fontSize: '17px'}}>Lets make something special.</i>
            </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color = '#DD0031' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color = '#F06529' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color = '#28A4D9' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color = '#E6D81D' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faAndroid} color = '#5ED4F4' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGit} color = '#5ED4F4' />
                </div>
            </div>
        </div>

        </div>
        
        
        
    )



}


export default About