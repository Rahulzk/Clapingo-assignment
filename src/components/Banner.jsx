import '../styles/banner.scss'


const Banner = () => {
  return (
    <div className='banner'>
          <div className="left-banner">
              <h2>
                  Hone your english speaking skills over <span style={{color:'#00CDAC'}}>one-on-one</span> video call
              </h2>
              <p>Practice english conversation with excellent communuicators
                  across the country and speak like a PRO 😎.
              </p>
              <button className='btn trial'>Book a trial</button>
              <button className='btn download'>Download our App</button>
          </div> 
          <div className="right-banner ">
              <div className='right-image'>
              </div>
          </div>
    </div>
  )
}

export default Banner