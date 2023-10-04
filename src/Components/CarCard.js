import React from 'react';
import ToyotaRAV4 from '../Assets/ToyotaRAV4.png'
import './CarCard.css'
import {IoIosSpeedometer} from 'react-icons/io'
import {BsPeople} from 'react-icons/bs'
import {RiGasStationFill} from 'react-icons/ri'
import {PiSteeringWheelBold} from 'react-icons/pi'
import {AiOutlineHeart} from 'react-icons/ai'
function CarCard(props) {
  return (
    <div className="car-card">
         <img src={ToyotaRAV4} alt="Toyota "/>
            <div className='heading'>
                    <h3>{props.name}</h3>
                    <p className='year'>{props.year}</p>
            </div>
            
        <div style={{display:"flex",justifyContent:"flex-start"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                    <div className='icon-text' >
                        <BsPeople />
                        <p className='p-comp'>{props.people} people</p>
                    </div>
                    <div  className='icon-text'>
                        <IoIosSpeedometer />
                        <p className='p-comp'>{props.milage}</p>
                    </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",marginLeft:"45px"}}>
                    <div  className='icon-text' >
                        <RiGasStationFill />
                        <p className='p-comp  align-bottom'>{props.fuel}</p>
                    </div>
                    <div  className='icon-text'>
                        <PiSteeringWheelBold />
                        <p className='p-comp'>{props.type}</p>
                    </div>   
            </div>
        </div>  

        <hr/>

        <div className='bottom-card' >
            <h3>$440</h3>
            <p>month</p>
            <div style={{display:"flex" }}>
                <AiOutlineHeart  className='swe'/>
                <button type="submit" className='btn-rent'>Rent now</button>
            </div>
        </div>



        
    </div>
  );
}

export default CarCard;