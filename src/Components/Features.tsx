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