import logo from '../assets/logo.png'

export default function Header() {
    return (
        <div>
            <img src={logo} className='w-28' alt="logo" />
            <div className=' text-3xl text-center'>TaskList</div>
        </div>
    )
}