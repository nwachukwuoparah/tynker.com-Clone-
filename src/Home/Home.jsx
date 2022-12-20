import Header from '../Header/Header'
import { useState } from 'react'
import './Home.css'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'
import Component3 from './Component3/Component3'
import Component4 from './Component4/Component4'
import Component5 from './Component5/Component5'
import Component6 from './Component6/Component6'
const Body = ({ setState, state }) => {
    const Menu = (
        <div className='Main_menu'>
            <div className='Menu'>
                <div className='Menu_wrap'>
                    <div className='link'>PLAY</div>
                    <div className='link'>PARENT</div>
                    <div className='link'>EDUCATORS</div>
                    <div className='link'>WHY CODE?</div>
                    <div className='link'>GIFT</div>
                </div>

            </div>
            <div onClick={() => { setState(!state) }} className='menu_lap'></div>
        </div>
    )
    return (
        <>
            <div className='Body_Wrap'>
                {state ? Menu : ''}
                <div className='Body_Contain'>
                    <div className='Head2'>
                        <div className='h2_wrap'>
                            <h2>
                                Holiday Bonus! All
                                Plans Include 2 FREE
                                Coaching Classes
                                ($120 Value)
                            </h2>
                        </div>

                    </div>
                    <Component1 />
                    <Component2 />
                    <Component3 />
                    <Component4 />
                    <Component5 />
                    <Component6 />
                </div>
            </div>
        </>

    )
}

export default Body