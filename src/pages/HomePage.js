import React from 'react'
import UserComponent from '../components/UserComponent'
import anime from 'animejs/lib/anime.es.js';
import { useState, useRef, useEffect, useMeasure } from "react";
import { useSpring, animated } from 'react-spring'
import { render } from '@testing-library/react';

// function App() {
//  const [active, toggle] = useState(false);
//  const[bind, { width }] = useMeasure();
//  const props = useSpring({
//   from: { width: 0 },
//   to: { width: active ? width : 0 },
//  })
//  return (
//   <div {...bind} className="main" onClick={() => toggle(!active)}>
//     <div class='animated.fill' style={{ width: props.width  }} />
//     <div class='content' > { active ? 100 : 0  } </div>
//     </div>
//  )
// }

// render(<App />, document.getElementById('root'));

const HomePage = () => {

  
  return (
    <>
    <div>
      
      <div className="homeHeader">
        <h1 className='fill'>Magic & Swords</h1>
      </div>
      
      <div className="footer">
        <h4>Amplifire 2022</h4>
      </div>
    </div>

    </>
  )
}



export default HomePage