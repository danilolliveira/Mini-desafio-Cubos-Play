import './style.css'
import Logo from '../../assets/logo.svg'
import ProfileImage from '../../assets/profile.jpg'

export default function Header() {
    return (
        <header>
            <img className='logo' src={Logo} alt="Logo" />
            <div className='container-welcome'>
                <img className='profile-img' src={ProfileImage} alt="Profile" />
                <strong>Bem vindo Danilo</strong>

            </div>
        </header>
    )
}