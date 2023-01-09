import '../styles/working.scss'

const Working = () => {
  return (
      <div className='working'>
          <h2>How it Works</h2>
          <div className="row">
              <div className="left col-5">
                  <HCard title="1. Create Account" desc="Create your account using phone number or email and take a free trial at ₹1." />
                  <HCard title="3. Select time slot" desc="Subscribe & select any time slot between 10 AM to 12 midnight." />
              </div>
              <div className="middle col-2">
                  <div className="rectangle"></div>
              </div>
              <div className="right col-5">
                  <HCard title="2. Subscribe" desc="Choose your preferred duration and select subscription package for your sessions. " />
                  <HCard title="4. You are done" desc="That’s it! Start practicing and reach your learning goal in speaking." />
              </div>
          </div>
    </div>
  )
}

const HCard = ({ title,desc }) => {
    return (
        <div className="hcard">
            <h3>{ title}</h3>
            <p>{ desc }
            </p>
        </div>
    )
}

export default Working