import React from 'react'
import FiftyYearsAgo from './50YearsAgo.jpg';
import Today from './Today.jpg';

const WelcomeImages = () => {
    return (
        <div className="image-container">
            <img src={FiftyYearsAgo} alt="couple 50 years ago wedding" className="fade-in-and-move FiftyYearsAgo"/>
            <img src={Today} alt="couple today after 50 years of marriage"  className="fade-in-and-move2 Today"/>
        </div>
    )
}

export default WelcomeImages

