import React, {useState, useEffect} from "react";
import styles from './SearchResults.module.css';
import {FaSyncAlt} from 'react-icons/fa';
import TrackList from "../TrackList/TrackList";
import Playlist from "../Playlist/Playlist";

function SearchResults (props) {
    const songList = props.songs;
   /* useEffect(()=>{
        songList.map((song, i) => {
            song = Object.assign(song, {id: i});
        })
    }, []);*/
    
    const [added, setAdded] = useState([]);
    const [resultsOrPlaylist, setResultsOrPlaylist] = useState(true);
    const [playlistName, setPlaylistName] = useState('Nombra tu playlist');

    const toggle = () => {
        setResultsOrPlaylist(!resultsOrPlaylist);
    }

    const resultsTitle = (
        <h2 className={styles.titulo}>
            Resultados
        </h2>
    )
    const handleChange = ({target}) => {
        setPlaylistName(target.value);
    }
    const playlistTitle = (
        <input 
            value={playlistName}
            type='text'
            className={styles.playlistTitle}
            onChange={handleChange}
        />
    )


    return (
        <>
            <div className={styles.searchResults}>
                <div className={styles.searchBanner}>
                    
                        {resultsOrPlaylist? resultsTitle : playlistTitle}
                    
                    <div className={styles.buttonDiv}>
                        <button className={styles.boton} onClick={toggle}>
                            <FaSyncAlt className={styles.remolino}/>
                        </button>
                        <p>{resultsOrPlaylist? 'Cambiar a Playlist' : 'Cambiar a resultados'}</p>
                    </div>
                </div>
                <div className={styles.lineaHorizontal}></div>
                <div className={styles.resultList}>
                    {resultsOrPlaylist && <TrackList songList={songList} added={added} add={setAdded} />}
                    {!resultsOrPlaylist && <Playlist addedToPlaylist={added} delete={setAdded}/>} 
                </div>
            </div>
        </>
    )
}

export default SearchResults;