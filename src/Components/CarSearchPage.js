import React from 'react'
import {useState,useEffect,useParams} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './CarSearchPage.css'
import CarCard from './CarCard';
function CarSearchPage({data,loading}) {
  // const { page } = useParams(); // Get the current page from the URL
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const perPage = 6;
  console.log("In carSeacth");
  // const currentPage = parseInt(page || 1);

  // useEffect(() => {
  //   // Fetch car data here and update the 'cars' state
  // }, [currentPage, searchQuery]);

  const handleSearch = () =>{
    loading()
    console.log("Search logic")

    const newFilter = data.filter((value) => {
      console.log(value)
      return value.carname.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (searchQuery === "") {
      setCars([]);
    } else {
      setCars(newFilter);
      console.log(newFilter);
    }
  }


  return (
    <div className='main-div'>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          className='search-input'
          onChange={(e) => setSearchQuery(e.target.value)}
        />

<div className="search-icon" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div style={{color:"#26458d",marginLeft:"35px"}} >
          Relevance ▼
        </div>
        <div style={{color:"#26458d",marginLeft:"35px"}} >
          All Brands ▼
        </div>


      </div>
      {cars.length != 0 && (
        <div className="dataResult">
          {  cars.slice(0, 6).map((value, key) => {
            return (
              <CarCard
              key={value.id}
              name={value.carname}
              year={value.year}
              people={value.people_fitted}
              milage={value.milage}
              type={value.type}
              fuel={value.fuel_type}
            />
            );
          })}
        </div>
      )}

    </div>
  )
}

export default CarSearchPage


