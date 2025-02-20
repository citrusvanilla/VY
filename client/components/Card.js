import React, {useState, useContext, useEffect} from 'react';
import { DropDownInfo } from './dropDownInfo';
import MenuIcon from '@material-ui/icons/Menu';
import { AppContext } from '../context';


const Card = (props) => {
    console.log(props.reviews)
    const [isModalOpen, setModalOpen] = useState(false);
    const handleDropDownClick = () => {
        setModalOpen(isModalOpen ? false: true);
    }
    
    return (
        <div className="cards">
    
    <div className="card-render">
    <MenuIcon onClick={handleDropDownClick} id="hamburger-menu" className="material-icons"></MenuIcon>
          {isModalOpen ? <DropDownInfo reviews={props.reviews} /> : 
    <div className="no-render">
          <h3 className="card-heading">
        {props.name}
    </h3>
    <p>Address: {props.address}</p>
    </div>}
          </div>
        
    </div>
    )
   
}

export default Card;