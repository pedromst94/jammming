import React from "react";
import styles from './TrackList.module.css';
import Track from "../Track/Track";

function TrackList (props) {
    const {songList, added} = props;

    const handleClick = ({target}) => {
        const idAdd = parseInt(target.value);
        if (!added.includes(songList[idAdd])){
        const addedSong = songList[idAdd];
        props.add(prev => [addedSong, ...prev]); 
    }} 

      const listaDeCanciones = songList.map((song) => {
        return (<li key={'song_'+song.id}>
            <div className={styles.trackContainer}>
            <Track song={song}/>
            <button className={styles.addButton} onClick={handleClick} value={song.id}>+</button> 
            </div>
        </li>);
    }); 

    return (
        <>
            <div className={styles.container}>
                <ul className={styles.resultTrackList}>
                    {listaDeCanciones}
                </ul>

            </div>
        </>
    )
}

export default TrackList;