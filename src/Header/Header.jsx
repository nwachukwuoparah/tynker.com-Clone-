import './Header.css'
import Logo from './Logo.png'
import Logo1 from './Logo1.png'
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
const Header = ({ setState, state }) => {
    return (
        <div className='Main_Header'>
            <div className='Header'>
                <div className='Child_Header'>
                    <div className='nav'>
                        {state ? <MdMenu onClick={() => { setState(!state) }} className='burger' style={{ marginLeft: 10, fontSize: 30 }} />
                            : <MdMenu onClick={() => { setState(!state) }} className='burger' style={{ marginLeft: 10, fontSize: 30 }} />}
                        <div className='imgDiv'>
                            <img className='img' style={{ width: 200 }} src={Logo} />
                            <img className='img1' style={{ width: 125 }} src={Logo1} />
                        </div>
                        <div className='Nav_links'>
                            <div className='link'>PLAY</div>
                            <div className='link'>PARENT</div>
                            <div className='link'>EDUCATORS</div>
                            <div className='link'>WHY CODE?</div>
                            <div className='link'>GIFT</div>
                        </div>
                    </div>
                    <div className='action'>
                        <div className='Join'>JOIN FOR FREE</div>
                        <div className='Login'>LOG IN</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header