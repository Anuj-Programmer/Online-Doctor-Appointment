import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Components/Nav'
import Doctorcard from '../Components/Doctor-card'
import "../styles/SearchPage.css"

function SearchPage() {
  const location = useLocation()
  const doctors = location.state?.doctors || []

  return (
    <div className="search-page">
     
      <Nav/>
      <div className="contact-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1edb01272473b09182df3664c04c400ee218d87?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
            className="header-left-image"
            alt="Decorative left element"
          />
          <h1 className="contact-title">Search Results</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29ce334b1048cc85e046bf85f7135b7e959c4508?placeholderIfAbsent=true&apiKey=5a19d1033d5b42b78c02079161eeb8a9"
            className="header-right-image"
            alt="Decorative right element"
          />
        </div>
      <div className="search-results">
        {/* <h2 className="results-heading">Search Results</h2> */}
        {doctors.length > 0 ? (
          <div className="doctors-container">
            {doctors.map((doctor) => (
              <Doctorcard
                key={doctor._id}
                doctorId={doctor._id}
                src={doctor.profile || "https://cdn.builder.io/api/v1/image/assets/TEMP/a087871af596bf026ffe5318827a05f466776a7d?placeholderIfAbsent=true&apiKey=2f1c0a1e76134ca289b0c716bd5bbe44"}
                speciality={doctor.specialization}
                experience={`${doctor.experience} years`}
                fee={`Rs ${doctor.fee}`}
                name={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                location={doctor.address}
                time={`${doctor.timeSlots[0]?.startTime || '30'} am`}
                rating="4.5"
              />
            ))}
            
            
          </div>
        ) : (
          <p className="no-results">No doctors found matching your search criteria</p>
        )}
        
      </div>
    </div>
  )
}

export default SearchPage
