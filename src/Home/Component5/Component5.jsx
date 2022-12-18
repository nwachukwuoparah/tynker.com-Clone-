import './Component5.css'
import logoapple from './images/logo-apple.png'
import logogoogleedu from './images/logo-googleedu.png'
import logomicrosoft from './images/logo-microsoft.png'
import logonasa from './images/logo-nasa.png'
import logopbs from './images/logo-pbs.png'
import logobbclearning from './images/logo-bbc-learning.png'
import logosmartdark from './images/logo-smart-dark.png'
import logolego from './images/logo-lego.png'
import logomc from './images/logo-mc.png'
import logomattel from './images/logo-mattel.png'
import logohotwheels from './images/logo-hotwheels.png'
import logobarbie from './images/logo-barbie.png'
import Comp5 from './Comp5'

const Component5 = () => {
    return (
        <div className='Component5'>
            <div className='Component5_wrap'>
                <div className='Component5_top'>
                    <h1>Why Should Kids and Teens Learn to Code with </h1>
                    <h1>Tynker?</h1>
                    <p>
                        Because <b>technology is so integrated</b>  into virtually every aspect of our lives,
                        learning about it is <b>more important than ever.</b>  Our coding platform makes it
                        convenient and fun for kids and teens to gain knowledge that will serve them
                        well throughout their lives. You can count on our<b>trusted
                            methods</b>  to help them develop and grow their capabilities with computers.
                    </p>
                    <p>
                        Tynker isn’t just for schools and coding camps, though. Parents who value
                        <b>STEM education</b> and want their children to know how to code should know that
                        our kids programming platform can be used at home, too. Tynker offers a range
                        of solutions with icon-coding for pre-readers, block-based coding, and advanced
                        courses in Python, JavaScript, data science, art, and image processing. There are
                        individual and family home plans, and our online coding classes for all ages are
                        an excellent way for them to gain the supplemental STEM skills needed for their future.
                    </p>
                </div>
            </div>
            <div className='Component5_Card_wrap'>
                <Comp5
                    h2='CODING BENEFITS'
                    p1='Top 10 Reasons to Code'
                    p2='Kids Coding Basics'
                    p3='Develop 21st Century Skills'
                    p4='Download eBooks on Coding'
                />
                <Comp5
                    h2='CODING GUIDES'
                    p1='What is Coding for Kids'
                    p2='Coding with Minecraft'
                    p3='Coding with Electronic Kits'
                    p4='Coding with Connected Toys'
                    p5='More Coding Resources'
                />
                <Comp5
                    h2='TYNKER HIGHLIGHTS'
                    p1='What’s New in Tynker?'
                    p2='COVID-19 Impact report'
                    p3='Meet our Featured Makers'
                    p4='Seasonal Coding Projects'
                    p5='Celebrating Women in STEM'
                />

                <Comp5
                    h2='CODING IN SCHOOLS'
                    p1='K-12 School Plans'
                    p2='AP Computer Science Principles'
                    p3='AP Computer Science A'
                    p4='Remote Learning'
                    p5='K-12 Success Stories'
                />
            </div>
            <div className='Component5_text'>
                <div className='Component5_text_wrap'>
                    <h1>Trusted by Leading Brands</h1>
                    <p>
                        Our methods for learning to code all are provided within a safe,
                        moderated community that is built around
                    </p>
                    <p>
                        encouraging students
                        to gain confidence in their abilities and do so without fear of failure.
                    </p>
                </div>

            </div>
            <div className='Component5_Image_wrap'>
                <div className='Component5_Image'>
                    <img src={logoapple} />
                    <img src={logogoogleedu} />
                    <img src={logomicrosoft} />
                    <img src={logonasa} />
                    <img src={logopbs} />
                    <img src={logobbclearning} />

                </div>
                <div className='Component5_Image'>
                    <img src={logosmartdark} />
                    <img src={logolego} />
                    <img src={logomc} />
                    <img src={logomattel} />
                    <img src={logohotwheels} />
                    <img src={logobarbie} />
                </div>
            </div>

        </div>
    )
}

export default Component5