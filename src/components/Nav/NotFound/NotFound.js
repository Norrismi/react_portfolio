
import React from 'react'
import './NotFound.css'
import BottomSVG from '../../Utility/BottomSVG'
import TopSVG from '../../Utility/TopSVG'

const NotFound = () => {
    return (

        <div className='notfound_container'>
            <div className='projects__svg-container' >
                <TopSVG />
                <h1 className='notfound__404'>
                    404: Page Not Found
                </h1>
            </div>
            <BottomSVG />
        </div>
    )
}

export default NotFound

