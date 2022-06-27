import 'react-slideshow-image/dist/styles.css'
import React from 'react';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeImages = [
    {
        url: 'images/old.jpeg',
        caption: 'נתינה מהלב '
    },
    {
        url: 'images/old2.jpeg',
        caption: 'מועילה עזרה '
    },
    {
        url: 'images/old3.jpeg',
        caption: 'נותנים יד ביד'
    },
    {
        url: 'images/old4.jpeg',
        caption: 'השמחה מרפאה'
    },
];


const HomePage = () => {
    return (


        <div className="slide-container">

            <Fade>

                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img src={fadeImage.url} alt="home-page"/>


                        </div>
                        <h2>{fadeImage.caption}</h2>
                    </div>
                ))}

            </Fade>
        </div>


    )
}

export default HomePage;