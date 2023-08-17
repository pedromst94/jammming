import React, {useState} from "react";
import styles from './searchBar.module.css';
import {FaSearch} from 'react-icons/fa';
import {FaSpotify} from 'react-icons/fa';

function SearchBar () {
    const [busqueda, setBusqueda] = useState('');

    const handleChange = (event) => {
        setBusqueda(event.target.value);
    }

    return (
        <>
        <div className={styles.searchBar}>
            
            <form className={styles.searchForm}>
                <div className={styles.botonSpoti}>
                    <FaSpotify className={styles.letraSpoti}/>
                </div>
                <input 
                    className={styles.searchInput}
                    type='text'
                    name='search'
                    value={busqueda}
                    id='search'
                    onChange= {handleChange}
                    placeholder="Busca por canción o artista"
                />
                <button className={styles.botonLupa}><FaSearch /></button>
            </form>
        </div>
        </>
    )
}

export default SearchBar;