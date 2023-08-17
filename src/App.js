import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './app.module.css';
import SearchBar from './searchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

const songs = [
  {
    title: 'Highway to Hell',
    artist: 'ACDC',
    album: 'Highway To Hell',
    genre: 'Rock'
  },
  {
    title: 'R U Mine',
    artist: 'Arctic Monkeys',
    album: 'Arc Album',
    genre: 'indie'
  },
  {
    title: 'El roce de tu cuerpo',
    artist: 'Platero y tu',
    album: 'Burrocknroll',
    genre: 'Rock'
  }
]

function App() {
  useEffect(()=>{
    songs.map((song, i) => {
        song = Object.assign(song, {id: i});
    })
}, []);

  return (
    <div className="App">
      <div className={styles.containerPrincipal}>
        <div className={styles.cortina}>
            <SearchBar />
            <SearchResults songs={songs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
