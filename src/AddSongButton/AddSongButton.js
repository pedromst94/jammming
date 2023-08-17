import React from "react";
import styles from './AddSongButton.module.css';

function AddSongButton () {
    return (
        <>
            <button className={styles.addButton}>+</button>
        </>
    )
}

export default AddSongButton;