import React from 'react'

const jobCTA = (props) => {
    const {minexp, maxexp,jobLink} = props;
  return (
    <div className='job-cta-container'>
      <h3>
      Minimum experience
      </h3>
      <h4>{minexp}</h4>
      <button className='job-cta-button'>⚡ Easy Apply</button>
    </div>
  )
}

export default jobCTA
