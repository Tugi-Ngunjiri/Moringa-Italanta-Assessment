import React  ,{ useState} from 'react';
import './App.css';
import Images from './Components/Images/Images';
import Views from './Components/Views/Views';
import Assets from './Components/Assets/Assets'
import Features from './Components/Features/Features';


function App() {
const [images, setImages] = useState<string[]>([])
const addImage = (imageUrl: string) =>{
  setImages((prevImages) => [imageUrl, ...prevImages]);
  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index)); 
  };

  const  [Images, SetImages] = useState<string>('');
  const handleSubmit = () => {
    // Implement your submit logic here
     console.log('Images:' ,Images);
  };
  return (
    <div className="app">
    {/*  Your AddImage  Component here*/ }
    
    <div className="AddImages"> 
      <form>
        <input value={Images} onChange={(e) => SetImages (e.target.value)} ></input>
      <button onClick={handleSubmit}>Add</button>
      </form>
       </div>
      </div>
  )
}
  return (
    <div>
      <Images/>
      < Assets />
      <Features />
      <Views />
      </div>
  )
}

export default App

