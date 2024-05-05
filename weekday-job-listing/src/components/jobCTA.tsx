import '../styles/jobCTA.css' 
const jobCTA = (props: any) => {
    const {minexp} = props;
  return (
    <div className='job-cta-container'>
      <div className='job-cta-experience'>
        <h3>
          Minimum Experience
        </h3>
        <h2>{minexp || 'NA'}</h2>
      </div>
      
      <button className='job-cta-button'>⚡ Easy Apply</button>
    </div>
  )
}

export default jobCTA
