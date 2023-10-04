import React, { useState } from 'react';
import { Link, useParams ,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import CarCard from './Components/CarCard';
import CarSearchPage from './Components/CarSearchPage';
import mockData from './data.json';
import Pagination from './Components/Pagination';

function App() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const { pageNumber } = useParams();
  const [loading, setloading] = useState(false)

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = mockData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
console.log("App"+currentCards);
  return (
    <Router>
      <div className="App">
      <CarSearchPage data={mockData} loading={()=>{
        console.log("function called");
        setloading(true)
      }}/>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {!loading && currentCards.map((car) => (
          <CarCard
            key={car.id}
            name={car.carname}
            year={car.year}
            people={car.people_fitted}
            milage={car.milage}
            type={car.type}
            fuel={car.fuel_type}
          />
        ))}
      </ul>
      {!loading && <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={mockData.length}
        currentPage={currentPage}
        paginate={paginate}
        
      />}
    </div>
    </Router>
  );
}

export default App;

// Pagination component remains the same
