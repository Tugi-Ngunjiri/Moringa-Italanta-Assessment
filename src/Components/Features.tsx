import './Features.css'
// Navbar and Dropdown
function Features() {

  type Feature ={
    title: string;
    link: string;
  };
 
   const features: Feature[] =[
    {title:"Invest Us",link:"# Invest Us"},
    {title:"About Us",link:"# About Us"},
    {title:"Social Impact",link:"# Social Impact" }
  
   ];
  return (
    <nav>
     <div>
    <div  >
      <img src= "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg"  alt="Image"  >
         <div>
          <p> Trade not aid</p>
          <h1>
             Southern Innovations addressing global problems
          </h1>
          </div></img>
      </div>
    <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg"  alt="Image">
      <div>
     
        <p>HOW TO REOGNIZE AN ELEWA MEMBER</p>
        <h1>  Dependable CReative, Suportive , Open Minded and Fun *</h1>
      </div>
    </img>
    
    </div>
    <div>
      <img src= "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg"  alt="Image">
        <div>
          <p> Scaling impact. Beyond the norm</p>
          <h1> Human and Environmental Impact through socila Enterprise</h1>
        </div>
      </img>
      </div>
     
      <div className="dropdown">
    <button  className="dropbtn">Dropdown</button>
      </div>
      {features.map((feature, index) =>(
        <a key={index} href={feature.link} className="active">
          {feature.title}
        </a>
      ) )}
     
    </nav>
  )}



export default Features