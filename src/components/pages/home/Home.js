import logo from "../../../assets/schoolInfo_image_YtXUiv801695863883.png";
import DestinationData from "../../destination/DestinationData";
import Footer from "../../footer/Footer";
import "./home.css";


const Home = () => {

  
  return (
    <>
 
 <div className='container-fluid nav'>
      <div className="container py-2">
      <div className='d-flex justify-content-between align-items-center'>
        <div className="row align-items-center">
        <div className='col-lg-3'>
          <img className='w-75' src={logo}/>
          
        </div>
        <div className="col-lg-8 d-flex flex-column justify-content-center"> 
            <h4>হাজীপুর সম্মিলনী ডিগ্রি কলেজ </h4>
            <p>মাগুরা সদর, মাগুরা</p>
          </div>
        </div>
        
        <div className='col-lg-2'>
        <div className="text-center text-lg-start">
            <a href="https://forms.gle/kryM3nqursvDKhzB9" className="fs-5 sendBtn d-flex justify-content-center align-items-center gap-2 course">
              রেজিস্ট্রেশন করুন <i className="fa fa-arrow-right"></i>
            </a>
            
          </div>
        </div>
      </div>
      </div>
     </div>
  <DestinationData/>

  <Footer/>
    </>
  )
}

export default Home