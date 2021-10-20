import React from "react";
import styles from "./scroll.module.scss";
import Image from 'next/image';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function HorizontalUsersScroll() {

    const imageTitles = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"];

    const horizontalScroll = (e) => {
        var container = document.getElementById('container')
        var containerScrollPosition = document.getElementById('container').scrollLeft
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behavior: 'smooth' //if you want smooth scrolling
        })
    }

    const scrollLeft = (e) => {
        const container = document.getElementById('container');
        const containerScrollPosition = document.getElementById('container').scrollLeft;
        container.scrollTo({
            top: 0,
            left: containerScrollPosition - 150,
            behavior: 'smooth'
        })
    }

    const scrollRight = (e) => {
        const container = document.getElementById('container');
        const containerScrollPosition = document.getElementById('container').scrollLeft;
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + 150,
            behavior: 'smooth'
        })
    }

    return (
        <div className={styles.scrollWrapper}>

            <ArrowBackIosIcon onClick={scrollLeft} className={styles.arrowIcons}/>
            <div className={styles.container} onWheel={horizontalScroll} id='container'>
                {imageTitles.map((imageTitle) => (
                    <div className={styles.imageWrapper}>
                        <img
                            src={"/images/" + imageTitle}
                            alt="Picture of the author"
                            quality={100}
                        />
                    </div>
                )
                )}
            </div>
            <ArrowForwardIosIcon onClick={scrollRight} className={styles.arrowIcons} />

        </div>
    );
}

export default HorizontalUsersScroll;