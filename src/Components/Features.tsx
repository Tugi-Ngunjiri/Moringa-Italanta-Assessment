import './Features.css'
// Navbar and Dropdown
function Features() {

  type Feature ={
    title: string;
    link: string;
  };
  
   const features: Feature[] =[
    {title:"Invest Us",link:"#"},
    {title:"About Us",link:"#"},
    {title:"Social Impact",link:"#" }
  
   ];
  return (
    <nav>
      <div >
      <img src= "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg"  alt="Image"></img>
      </div>
     <div>
      <img src= "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg"  alt="Image"></img>
      </div>
     
    <div>
    <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg"  alt="Image"></img>
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