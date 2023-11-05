import React from 'react';
import './Images.css'
import { useState} from 'react';
function Images() {
  const  [Images, SetImages] = useState<string>('');
  const handleSubmit = () => {
    // Implement your submit logic here
     console.log('Images:' ,Images);
  };
  const Image: React.FC = () => {
    return(
      <div className="section__image">
<h2> Image Section</h2>
      {/* Your image-Related content goes here */}
      <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg"  alt="Image"></img>
      </div>
    )
  }

  return (
    <div className="App">
      {/* Your Image components here */}
      <div className="AddImages"> 
      <form>
        <input value={Images} onChange={(e) => SetImages (e.target.value)} ></input>
      <button onClick={handleSubmit}>Add</button>
      </form>
       </div>
      </div>
     
  )
}

export default Images


