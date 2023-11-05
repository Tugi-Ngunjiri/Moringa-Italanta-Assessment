import React from 'react';
import './ScrollEffect.css'
// Adding a scroll effect 
import {Element, scroller } from 'react-scroll';
function ScrollEffect() {
    const ScrollEffect: React.FC= () =>{
const ScrollToElement = () => {
    const scrollToElement = () => {
        // This is the element you want to scroll to
        scroller.scrollTo('elementToCrollTo', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuad',
        }) };
};
return (
    <div>
        <button onClick={ScrollToElement}>Scroll to Element</button>
        <Element name="elementToScrollTo">
        <div className="scroll-effect-container">
            <h1>Scroll Down to See the Effect</h1>
    </div>
    </Element>
    <div  className="content">
        <p>This is some content on the page</p>

    </div>
    </div>
  )
}
}
export default ScrollEffect