import './Component6.css'
import commonsenseselection from './Images/common-sense-selection-2020.webp'
import award from './Images/award-aasl.png'
import awardsmartmedia from './Images/award-smart-media.png'
import awardparentschoicegold from './Images/award-parents-choice-gold@2x.png'
import awardtwillywig from './Images/award-twillywig.png'
import parentingproducts from './Images/award-national-parenting-products.png'
import awardmomschoice from './Images/award-moms-choice.png'
import digital_education_awards_2021_winner from './Images/digital-education-awards-2021-winner.webp'
import parents_picks_awards_2022 from './Images/parents-picks-awards-2022.webp'
import Comp6 from './Comp6'
import student_cropped from './Images/testimonial-student-cropped (1).png'
import parent_cropped from './Images/testimonial-parent-cropped.png'
import teacher_cropped from './Images/testimonial-teacher-cropped.png'
import tynker_small_darktm from './Images/tynker_small_darktm.png'
import gift_box from './Images/gift_box.png'
import { BsQuestionCircleFill } from "react-icons/bs";
const Component6 = () => {
    return (
        <div className='Component7'>
            <div className='Component7_head_wrap' >
                <div className='Component7_head'>
                    <h1>Join Tynker's Global Community</h1>
                    <botton>SIGN UP FREE</botton>
                </div>

                <div className='absolute_images'>
                    <div className='absolute_images1'>
                        <div className="hp-control-map-label-content">
                            <b>
                                60 <br />Million
                            </b>
                            students
                        </div>
                    </div>

                    <div className='absolute_images2'>
                        <div className="hp-control-map-label-content">
                            <b>
                                60 <br />Million
                            </b>
                            students
                        </div>
                    </div>

                    <div className='absolute_images3'>
                        <div className="hp-control-map-label-content">
                            <b>
                                60 <br />Million
                            </b>
                            students
                        </div>
                    </div>
                </div>

                <div className='Component7_card'>
                    <Comp6 img={student_cropped} height={220} p1='Tynker Featured Maker' p=' I thought a game was going to be extremely hard to make, but Tynker made it really easy.' />
                    <Comp6 img={parent_cropped} height={290} p1="Charlotte R." p2="Parent | Melbourne, Australia" p="There's so much opportunity once they understand how coding works. It's amazing to see them create incredible things themselves." />
                    <Comp6 img={teacher_cropped} height={240} p1="Valerie S." p2="5th Grade Teacher | California, US" p="Tynker has made programming fun, exciting, and simple and will help lead kids into their future." />
                </div>

            </div>

            <div className='Component7_wrap'>
                <div className='Component7_images'>
                    <div className='Component7_images_wrap'>
                        <img src={commonsenseselection} />
                        <img src={award} />
                        <img src={awardsmartmedia} />
                        <img src={awardparentschoicegold} />
                        <img src={awardtwillywig} />
                        <img src={parentingproducts} />
                        <img src={awardmomschoice} />
                        <img src={digital_education_awards_2021_winner} />
                        <img src={parents_picks_awards_2022} />
                    </div>

                </div>
                <div className='Ul_wrap'>
                    <h1>Frequently asked questions</h1>
                    <ul>

                        <li> Is coding good for kids?</li>
                        <li> How do I start my child coding?</li>
                        <li> What age is best to introduce coding to kids?</li>
                        <li> Which is the best coding for kids program?</li>
                        <li> Why is coding needed?</li>
                        <li> Why should we use Tynker coding for kids?</li>
                        <li> How do I teach my 7 year old code?</li>
                        <li> What options are there for coding for teens?</li>
                        <hr />
                    </ul>
                </div>
                <div className='footer'>
                    <div className='footer_wrap'>
                        <div className='footer_wrap_top'>
                            <div className='footer_wrap_top1'>
                                <h5>ABOUT</h5>
                                <p>
                                    Tynker is the world’s leading K-12 creative coding
                                    platform, enabling students of all ages to learn to
                                    code at home, school, and on the go. Tynker’s highly
                                    successful coding curriculum has been used by one in
                                    three U.S. K-8 schools, 100,000 schools
                                    globally, and over 60 million kids across 150 countries.
                                </p>
                            </div>
                            <div className='footer_wrap_top2'>
                                <h5>RESOURCES</h5>
                                <p>Blog</p>
                                <p>About Us</p>
                                <p>Press</p>
                                <p>Jobs</p>
                                <p>Mobile Apps</p>
                                <p>Coding eBooks</p>
                                <p>Forum</p>
                                <p>Store</p>
                                <p>CS Authors</p>
                            </div>
                            <div className='footer_wrap_top2'>
                                <h5>PARENTS</h5>
                                <p>Overview</p>
                                <p> Curriculum</p>
                                <p> Live Classes</p>
                                <p>Give a Gift</p>
                                <p>Redeem</p>
                                <p> Why Coding</p>
                                <p>Featured Makers</p>
                                <p>Plans & Pricing</p>

                            </div>
                            <div className='footer_wrap_top2'>
                                <h5>  EDUCATORS</h5>
                                <p>Overview</p>
                                <p>Elementary</p>
                                <p>Middle School</p>
                                <p>High School</p>
                                <p>AP CS Courses</p>
                                <p>PD</p>
                                <p>Hour of Code</p>
                                <p>STEM Projects</p>
                                <p>Request a Quote</p>
                            </div>
                            <div className='input'>
                                <h5>PARENT NEWSLETTER</h5>
                                <input placeholder='Enter Your Email' />
                                <button cla >OK</button>
                            </div>
                        </div>
                        <hr />
                        <div className='footer_wrap_bottom'>
                            <img src={tynker_small_darktm} />
                            <p>© 2022 Neuron Fuel</p>
                            <p>Terms</p>
                            <h5>Conditions PRIVACY POLICY </h5>
                            <p>Kids Online Safety</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </div>

                    </div>
                    <div className='stickey_footer'>
                        <img src={gift_box} />
                        <h2>Keep Learning how to code With Tynker</h2>
                        <button>NOW 20% OFF</button>
                    </div>
                    <div className='Question_div' >
                        <BsQuestionCircleFill  style={{fontSize:40, color:'white'}}className='Question'/>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Component6