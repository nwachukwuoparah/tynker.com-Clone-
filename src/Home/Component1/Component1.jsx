import './Compoment1.css'
import { MdPlayArrow } from "react-icons/md";
const Component1 = () => {
    return (
        <div className="Component1">
            <div className='Component1_text'>
                <h1>Coding For Kids and Teens Made Easy</h1>
                <p>Tynker is the fun way to learn programming and develop problem-solving & critical thinking skills. Our new bundles include live expert
                    coaching to get your child off to a fast, confident start.</p>
                <div className='Component1_button'>
                    <botton>BUY NOW</botton>
                    <p>Get Started for Free</p>
                </div>

                <MdPlayArrow className='Play_button' />

            </div>
        </div>
    )
}
export default Component1