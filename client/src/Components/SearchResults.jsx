import React, { useState, useEffect } from 'react';
import { Search, MapPin, Building2, Star, Heart, Filter } from 'lucide-react';
import './styles.css';
import Nav from "./Nav";

const DoctorSearch = () => {
  // Dummy data for doctors
  const [favorites, setFavorites] = useState(new Set());
  const [doctors, setDoctors] = useState([
    // Initial set of doctors...
    {
      id: '1',
      name: 'Dr. Michael Blue',
      specialty: 'Psychologist',
      experience: '12 years experience',
      location: 'Minneapolis, MN',
      rating: 5.0,
      duration: '30 Min',
      fee: 650,
      available: true,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '2',
      name: 'Dr. Madison Rose',
      specialty: 'Gynecologist',
      experience: '10 years experience',
      location: 'Minneapolis, MN',
      rating: 5.0,
      duration: '30 Min',
      fee: 650,
      available: true,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '3',
      name: 'Dr. Michael Brown',
      specialty: 'Psychologist',
      experience: '8 years experience',
      location: 'Chicago, IL',
      rating: 4.8,
      duration: '45 Min',
      fee: 700,
      available: true,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '4',
      name: 'Dr. Olivia Carter',
      specialty: 'Dermatologist',
      experience: '15 years experience',
      location: 'San Francisco, CA',
      rating: 4.9,
      duration: '40 Min',
      fee: 750,
      available: false,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '5',
      name: 'Dr. Ethan Wilson',
      specialty: 'Cardiologist',
      experience: '13 years experience',
      location: 'New York, NY',
      rating: 4.7,
      duration: '30 Min',
      fee: 900,
      available: true,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '6',
      name: 'Dr. Sophia Martinez',
      specialty: 'Pediatrician',
      experience: '9 years experience',
      location: 'Los Angeles, CA',
      rating: 5.0,
      duration: '50 Min',
      fee: 500,
      available: true,
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '7',
      name: 'Dr. Liam Anderson',
      specialty: 'Neurologist',
      experience: '11 years experience',
      location: 'Seattle, WA',
      rating: 4.6,
      duration: '60 Min',
      fee: 1100,
      available: false,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '8',
      name: 'Dr. Ava Thomas',
      specialty: 'Endocrinologist',
      experience: '7 years experience',
      location: 'Houston, TX',
      rating: 4.8,
      duration: '45 Min',
      fee: 800,
      available: true,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '9',
      name: 'Dr. Noah Harris',
      specialty: 'Orthopedic Surgeon',
      experience: '14 years experience',
      location: 'Boston, MA',
      rating: 4.9,
      duration: '50 Min',
      fee: 950,
      available: true,
      image: 'https://images.unsplash.com/photo-1612277795421-47b4cd76d5d1?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '10',
      name: 'Dr. Emma White',
      specialty: 'Ophthalmologist',
      experience: '6 years experience',
      location: 'Denver, CO',
      rating: 5.0,
      duration: '35 Min',
      fee: 600,
      available: false,
      image: 'https://images.unsplash.com/photo-1603398938378-59a4f00e55a6?auto=format&fit=crop&q=80&w=400'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const [currentDoctors, setCurrentDoctors] = useState(doctors);
  
  // Dummy function to simulate loading more doctors
  // const loadMoreDoctors = () => {
  //   if (loading) return;
  //   setLoading(true);

  //   // Simulate a delay like fetching data from an API
  //   setTimeout(() => {
  //     const newDoctors = [
  //       {
  //         id: '11',
  //         name: 'Dr. Lucas Gray',
  //         specialty: 'Dentist',
  //         location: 'Dallas, TX',
  //         rating: 4.7,
  //         duration: '40 Min',
  //         fee: 850,
  //         available: true,
  //         image: 'https://images.unsplash.com/photo-1595625981166-ef7ac16ff6fd?auto=format&fit=crop&q=80&w=400'
  //       },
  //       {
  //         id: '12',
  //         name: 'Dr. James Lee',
  //         specialty: 'Orthopedics',
  //         location: 'Austin, TX',
  //         rating: 4.5,
  //         duration: '50 Min',
  //         fee: 950,
  //         available: true,
  //         image: 'https://images.unsplash.com/photo-1603398938378-59a4f00e55a6?auto=format&fit=crop&q=80&w=400'
  //       },
  //       // More doctors here...
  //     ];

  //     setCurrentDoctors(prevDoctors => [...prevDoctors, ...newDoctors]);
  //     setLoading(false);
  //   }, 1000);
  // };

  // Function to handle scroll event
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom) {
      loadMoreDoctors();
    }
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div>
      <div className="header">
        <Nav />
      </div>

      {/* Search Section */}
      <div className="search-section">
        <h1 className="search-title">Search Results</h1>

        <div className="search-bar">
          <div className="search-input-group">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search doctors"
              className="search-input"
            />
          </div>
          <div className="search-input-group">
            <MapPin className="icon" />
            <input
              type="text"
              placeholder="Location"
              className="search-input"
            />
          </div>
          <div className="search-input-group">
            <Building2 className="icon" />
            <input
              type="text"
              placeholder="Specialty"
              className="search-input"
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </div>

        {/* Results Section */}
        <div className="results-container">
          <div className="results-header">
            <div className="results-count">
              <span>Showing</span>
              <span className="results-count-number">450</span>
              <span>Doctors For You</span>
            </div>
            <div className="filters">
              <div className="filter-group">
                <span>Availability</span>
                <Filter className="icon" />
              </div>
              <div className="filter-group">
                <span>Sort By</span>
                <select className="filter-select">
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="filter-pills">
            <button className="pill">Specialities</button>
            <button className="pill">Hospitals</button>
            <button className="pill">Doctors</button>
            <button className="pill">Reviews</button>
            <button className="pill">Clinic</button>
            <button className="clear-all">Clear All</button>
          </div>

          <div
            className="doctors-grid"
            onScroll={handleScroll} // Attach the scroll event here
            style={{ overflowY: 'auto', maxHeight: '80vh' }} // Adding maxHeight for scrollable content
          >
            {currentDoctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card">
                 <div className="hover-info">
                   <b><p>{doctor.experience}</p></b>
                  </div>
                <div className="doctor-image-container">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image"
                  />
                  <button
                    onClick={() => toggleFavorite(doctor.id)}
                    className="favorite-btn"
                  >
                    <Heart
                      className={`icon ${
                        favorites.has(doctor.id) ? 'icon-favorite active' : 'icon-favorite'
                      }`}
                    />
                  </button>
                  <div className="rating-badge">
                    <Star className="icon-sm icon-yellow" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>
                <div className="doctor-info">
                  <div className="doctor-specialty">
                    <span>{doctor.specialty}</span>
                    {doctor.available && (
                      <span className="available-badge">• Available</span>
                    )}
                  </div>
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <div className="doctor-location">
                    <MapPin className="icon-sm" />
                    <span>{doctor.location}</span>
                    <span className="doctor-location-dot">•</span>
                    <span>{doctor.duration}</span>
                  </div>
                  <div className="consultation-info">
                    <div>
                      <div className="fee-label">Consultation Fees</div>
                      <div className="fee-amount">${doctor.fee}</div>
                    </div>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
            {loading && <div>Loading more doctors...</div>}
          </div>
        </div>
      </div>
      

      
    </div>

    
  );
}

export default DoctorSearch;
