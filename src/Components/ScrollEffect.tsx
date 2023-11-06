import './ScrollEffect.css'

import React, { useRef} from 'react'
import './ScrollEffect.css'

function ScrollEffect() {
 const containerRef = useRef<HTMLDivElement | null>(null);
  const ScrollEffect = () =>{
    if(containerRef.current){
        containerRef.current.scrollIntoView({
         behavior: 'smooth',
        });
    }
  };

  return (
    <div>
        <button onClick={ScrollEffect}>Scroll to Element</button>
        <div>
            <h1> Scroll Doown to See the effect</h1>
        </div>
        <div>
            <div ref={containerRef}>
                <p>This is some content on the page</p>
            </div>
        </div>
    </div>
  )
}

export default ScrollEffect
