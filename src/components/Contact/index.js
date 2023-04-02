import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

import emailjs from '@emailjs/browser' 

const Contact = () => {
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters  stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e' ]}
                    idx={15} />
                </h1>
                <p >
                    Will add logic for form to work within the week!
                </p>
                <div className='contact-form'>
                    <form >
                        <ul>
                            <li className='half'>
                                <input type='text' placeholder='Name' name='name' required />
                            </li>
                            <li className='half'>
                                <input type='email' placeholder='Email' name='name' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required ></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="Send message!"  />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        
        </>

)

}




export default Contact