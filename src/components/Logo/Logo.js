import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';


const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img alt='' style={{paddingTop:'15px'}} src="http://emahya.com/wp-content/uploads/2018/01/board-2181ff407_1920.png"></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo;