import React from 'react'
import UserComponent from '../components/UserComponent'
import anime from 'animejs/lib/anime.es.js';
import { useState, useRef, useEffect, useMeasure } from "react";
import { useSpring, animated } from 'react-spring'
import { render } from '@testing-library/react';
import '../images/gamePic.png'


const HomePage = () => {

  
  return (
    <>
    <div>
      
      <div className="homeHeader">
        <h1 className='fill'>Magic & Swords</h1>
      </div>

      <div className="pic-container">
        <img src={require('../images/gamePic.png')} alt="gamePic" className='game-pic'/>
      </div>


      
      <div className="footer">
        <h4>Amplifire 2022</h4>
      </div>
    </div>

    </>
  )
}



export default HomePage