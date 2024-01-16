import React from 'react'
import './TouristSpotHomePage.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdOutlineJoinInner} from 'react-icons/md'
import {IoMdRadioButtonOn} from 'react-icons/io'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Tourist_Spot_Details from '../Files/TouristSpotDetails'
import {Link} from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'
import { LineWeight } from '@mui/icons-material'

const TouristSpotHomePage = () => {
    const backgroundImageStyle = {
        backgroundImage: `url('https://trip-partner.s3.eu-north-1.amazonaws.com/pexels-kwnos-iv-16785282+(1)+(1).jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%', // Adjust this based on your design
        margin: 0,       // Remove default margin
        padding: 0,      // Remove default padding
      };
    function shuffleArray(array) {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      }
    const shuffledDetails = shuffleArray(Tourist_Spot_Details.slice(0, 5));

  return (
    <section className="main container section" >
        <div className="secTitle">
            <h1 data-aos='fade-right' className="title">
                Most Visited Destinations...
            </h1>
        </div>
 
        <div className="secContent grid">
            {
                shuffledDetails.slice(0,5).map(({spot_id, spot_image, spot_name, spot_address, grade, fees, spot_description})=>{
                    const maxDescriptionLength = 110;
                    const truncatedDescription =
                    spot_description.length > maxDescriptionLength
                        ? `${spot_description.substring(0, maxDescriptionLength)}...`
                        : spot_description;
                    return(
                        
                        <div key={spot_id} className="singleDestination" style={{padding:'25px'}}>
                            <div className="imageDiv">
                                <img src={spot_image} alt={spot_name} />
                            </div>
 
                            <div className="cardInfo" style={{display:'flex', flexDirection:'column',gap:'5px', justifyContent:'center'}}>
                                <h4 className="spot_name">{spot_name}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker id='location-icon' className='icon' />
                                <span className="spot_address">{spot_address}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{truncatedDescription}</p>
                                </div>
                                <Link to={`/Spot/${encodeURIComponent(spot_id)}`}><button className="btn flex">
                                    VIEW MORE
                                    <IoMdRadioButtonOn className='icon'/>
                                </button></Link>
                            </div>
                        </div>
                    )
                })
            }
 
            <p>More places to be added soon...</p>
        </div>
 
        <br />
        <br />
 
        <div className="secTitle">
            <h1 data-aos='fade-right' className="title">
                All places .....
            </h1>
        </div>
        <div className="secContent grid">
            {
                Tourist_Spot_Details.map(({spot_id, spot_image, spot_name, spot_address,  spot_description})=>{
                    const maxDescriptionLength = 110;
                    const truncatedDescription =
                    spot_description.length > maxDescriptionLength
                        ? `${spot_description.substring(0, maxDescriptionLength)}...`
                        : spot_description;
                    return(
                        <div key={spot_id} className="singleDestination" style={{padding:'25px'}}>
                            <div className="imageDiv">
                                <img src={spot_image} alt={spot_name} />
                            </div>
 
                            <div className="cardInfo">
                                <h4 className="spot_name">{spot_name}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker id='location-icon' className='icon' />
                                <span className="spot_address">{spot_address}</span>
                                </span>
 
                                <div className="desc">
                                    <p>{truncatedDescription}</p>
                                </div>
                                <Link to={`/Spot/${encodeURIComponent(spot_id)}`}><button className="btn flex">
                                    VIEW MORE
                                    <IoMdRadioButtonOn className='icon'/>
                                </button></Link>
                            </div>
                        </div>
                    )
                })
            }
 
            <p>More places to be added soon...</p>
        </div>
    </section>
  )
}
 
export default TouristSpotHomePage