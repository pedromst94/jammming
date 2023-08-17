import React from "react";
import styles from './Playlist.module.css';
import Track from "../Track/Track";
import {FaTimes} from 'react-icons/fa';

function Playlist (props) {
    const {addedToPlaylist} = props;

    const deleteSong = ({target}) => {
        const deleteId = parseInt(target.value);
        props.delete((prev) => {
            return prev.filter(song=> song.id !== deleteId);
        });
        console.log(addedToPlaylist)
    }

    const Playlist = addedToPlaylist.map((song) => {
        return (<li key={'addedSong_'+song.id}>
            <div className={styles.trackContainer}>
            <Track song={song}/>
            <button className={styles.deleteButton} value={song.id} onClick={deleteSong}><FaTimes/></button> 
            </div>
        </li>);
    });


    return (
        <>
            <div className={styles.container}>
                <ul className={styles.resultTrackList}>
                    {Playlist}
                </ul>
            </div>
        </>
    )
}

export default Playlist;