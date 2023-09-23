import './header.scss';
import logo from '../../assets/images/filmhub.png';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch } from 'react-redux';
import { getFilms, setCategory } from '../../features/counter/counterSlice';

const Header = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const {category} = useParams();

    const dispatch = useDispatch();

    const homepage = () => {
        dispatch(getFilms({pageNumber:1,category: category}));
    }

    return(
        <>
            <div className="top-nav">
                <Link to="/popular" onClick={homepage}>
                    <div className='logo'>
                        <img src = {logo} alt='logo' />
                    </div>
                </Link>
                {/* <input type='text' className = 'search' value={value} onChange={filmList} /> */}
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <OutsideClickHandler
                    onOutsideClick={() => {
                        if(isOpen){
                            setIsOpen(false);
                        }
                    }}
                    >
                    <ul className="menu">
                        <li onClick={homepage}>Home</li>
                        <li onClick={()=>setIsOpen(prev => !prev)}>Category
                            {isOpen ?
                                <ul className='subMenu'>
                                    <Link to = '/top_rated'><li>Top Rated</li></Link>
                                    <Link to = '/popular'><li>Popular</li></Link>
                                    <Link to = '/upcoming'><li>Upcoming</li></Link>
                                    <Link to = '/now_playing'><li>Now Playing</li></Link>
                                </ul>
                            :
                                ''
                            }
                        </li>
                        <li><Link to = '/about'>About</Link></li>
                    </ul>
                </OutsideClickHandler>
                
            </div>
        </>
    )
}
export default Header;


// mnac stugel inchi hamara 2 hat search, u amen categoryi hamar pagenation