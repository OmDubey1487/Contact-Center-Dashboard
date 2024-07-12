import './Header.css'
import DropdownIcon from '../../assets/dropdown-icon.png'
import ProfilePhoto from '../../assets/profile-image.jpg'

const Header = () => {
    return (
        <div className='header'>
            <span id="accountName">John Taylor (Ops)</span>
            <img src={DropdownIcon} className='dropdown-icon'/>
            <img src={ProfilePhoto} className='profile-photo' />
        </div>
    )
}

export default Header