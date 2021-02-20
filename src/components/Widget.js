import React from 'react'
import './Widget.css';
import InfoIcon from "@material-ui/icons/Info"
import NewsArticle from './NewsArticle';

function Widget() {
    return (
        <div className="widget">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>

            <NewsArticle 
                heading = "This Project was build using React"
                subtitle = "Project - 9099 Readers"    
            />
            <NewsArticle 
                heading = "Corona Virus Affecting job search for new graduates"
                subtitle = "Economy - 3099 Readers"    
            />
            <NewsArticle 
                heading = "Is Redux Good?"
                subtitle = "Code - 6253 Readers"    
            />
        </div>
    )
}

export default Widget
