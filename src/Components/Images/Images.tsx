import React from 'react';
import './Images.css'
import { useState} from 'react';
function Images() {
  const  [Images, SetImages] = useState<string>('');
  const handleSubmit = () => {
    // Implement your submit logic here
     console.log('Images:' ,Images);
  };

  return (
    <div className="App">
      {/* Your Images and Views components here */}
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


