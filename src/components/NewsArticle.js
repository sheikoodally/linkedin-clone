import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widget.css';


function NewsArticle({heading, subtitle}) {
    return (
        <div className ='widget_article'>
            <div className='widget_articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widget_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div> 
        </div>
    )
}

export default NewsArticle
