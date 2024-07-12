import './Sidepane.css'
import Logo from '../../assets/contact-center-icon.png'
import DashboardIcon from '../../assets/dashboard-icon.png'
import ContactIcon from '../../assets/contact-icon.png'
import CalanderIcon from '../../assets/calander-icon.png'
import TeamIcon from '../../assets/team-icon.png'
import ButtonIcon from '../../assets/button-icon.png'
import CallIcon from '../../assets/call-icon.png'
import SettingsIcon from '../../assets/settings-icon.png'
import ExitIcon from '../../assets/exit-icon.png'

const Sidepane = () => {
    return (
        <div className='sidepane'>
            <img src={Logo} className='logo' />
            <ul className='option-panel-1' >
                <li>
                    {/* convert anchor tag to Link whn using router on top */}
                    <a href='#' >
                        <img src={DashboardIcon} className='sidepane-icon' />
                    </a>
                </li>
                <li>
                    {/* convert anchor tag to Link whn using router on top */}
                    <a href='#' >
                        <img src={ContactIcon} className='sidepane-icon' />
                    </a>
                </li>
                <li>
                    {/* convert anchor tag to Link whn using router on top */}
                    <a href='#'>
                        <img src={CalanderIcon} className='sidepane-icon' />
                    </a>
                </li>
                <li>
                    {/* convert anchor tag to Link whn using router on top */}
                    <a href='#' >
                        <img src={TeamIcon} className='sidepane-icon' />
                    </a>
                </li>
                <li>
                    {/* convert anchor tag to Link whn using router on top */}
                    <a href='#' >
                        <img src={ButtonIcon} className='sidepane-icon' />
                    </a>
                </li>
            </ul>
            <ul className='option-panel-2' >
                <span id='sidepane-text'>Other</span>
                <li>
                    {/* convert anchor tag to Link whn using router on top */}
                    <a href='#' >
                        <img src={CallIcon} className='sidepane-icon' />
                    </a>
                </li>
                <li>
                    {/* convert anchor tag to Link whn using router on top */}
                    <a href='#' >
                        <img src={SettingsIcon} className='sidepane-icon' />
                    </a>
                </li>
            </ul>
            {/* Convert anchor tag to Link when using router on top */}
            <a href='#' >
                <img src={ExitIcon} className='sidepane-icon' />
            </a>
        </div>
    )
}

export default Sidepane