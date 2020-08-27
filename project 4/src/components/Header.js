import React from 'react';
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ExploreIcon from '@material-ui/icons/Explore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

function Header(props) {
    return (
        <div className='header'>
            <div className="header__icons">
                <div className="header__icon 
                header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>

                <div className="header__icon">
                    <LocalBarIcon />
                    <p>Drink Menu</p>
                </div>  

                <div className="header__icon">
                    <ShoppingCartIcon />
                    <p>Orders</p>
                </div>

                <div className="header__icon">
                    <RecordVoiceOverIcon />
                    <p>Reviews</p>
                </div>

                <div className="header__icon">
                    <ExploreIcon />
                    <p>Explore</p>
                </div>   

            </div>
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30132759/bar6.png" alt="" />
        </div>
    );
}

export default Header;
