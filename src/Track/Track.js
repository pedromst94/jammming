import React from "react";
import styles from './Track.module.css'

function Track (props) {
    const {title, artist, album} = props.song;
    return (
        <>
            <div className={styles.trackContainer}>
                <span className={styles.titulo}>{title}</span>
                <span className={styles.artista}>{artist} - {album}</span>
            </div>
        </>
    )
}

export default Track;