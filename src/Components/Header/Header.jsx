import profile from '../../assets/images/profile.png'
import './Header.css'
const Header = () => {
    return (
       <div className='flex justify-between max-w-7xl mx-auto bg-lime-500 items-center h-28 p-6'>
        <h1 className='text-4xl text-amber-600'>Knowledge Cafe</h1>
        <div className='space-x-6 text-slate-950 text-2xl'>
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Blog</a>
        </div>
        <img className='header-img' src={profile} alt="" />
       </div>
    );
};

export default Header;