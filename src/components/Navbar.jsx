import { NavLink, useLocation } from 'react-router-dom'
import LocalOfferIcon from '../assets/icon-components/LocalOfferIcon'
import PersonOutlineIcon from '../assets/icon-components/PersonOutlineIcon'
import ExploreIcon from '../assets/icon-components/ExploreIcon'

function Navbar() {
  const location = useLocation().pathname

  return (
    <>
      <footer className='navbar'>
        <nav className='navbarNav'>
          <ul className='navbarListItems'>
            <li className='navbarListItem'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'navbarListItemNameActive' : 'navbarListItemName'
                }
              >
                <ExploreIcon fill={location === '/' ? '#2c2c2c' : '#8f8f8f'} />
                <p>Explore</p>
              </NavLink>
            </li>
            <li className='navbarListItem'>
              <NavLink
                to='offers'
                className={({ isActive }) =>
                  isActive ? 'navbarListItemNameActive' : 'navbarListItemName'
                }
              >
                <LocalOfferIcon
                  fill={location === '/offers' ? '#2c2c2c' : '#8f8f8f'}
                />
                <p>Offers</p>
              </NavLink>
            </li>
            <li className='navbarListItem'>
              <NavLink
                to='profile'
                className={({ isActive }) =>
                  isActive ? 'navbarListItemNameActive' : 'navbarListItemName'
                }
              >
                <PersonOutlineIcon
                  fill={location === '/profile' ? '#2c2c2c' : '#8f8f8f'}
                />
                <p>Profile</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
export default Navbar
