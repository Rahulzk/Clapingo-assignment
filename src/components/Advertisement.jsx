import '../styles/advertisement.scss'

const Advertisement = () => {
  return (
    <div className='advertise row'>
          <div className="left-advertise col-7">
              <div className="download-section">
                  <Info amount="50" title="Mobile Downloads" />
              </div>
              <div className="learner-section">
                  <Info amount="80" title="Happy Learners" />
              </div>
              <div className="session-section">
                  <Info amount="53" title="Sessions per month" />
              </div>
              <div className="speaker-section">
                  <Info amount="200" title="Speakera around the globe" />
              </div>
          </div>
          <div className="right-advertise col-5">
                <p style={{ color: '#00CDAC' }}>Book a trial</p>
                <h2>
                  Start your English speaking journey today!
              </h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis cumque velit?
                  Distinctio quis, mollitia, amet commodi culpa ut incidunt cupiditate aperiam ex eos ullam
                  nesciunt provident inventore
              </p>
              <button className='btn trial'>Book a trial</button>

          </div>
    </div>
  )
}

const Info = ({ amount, title }) => {
    return (
        <div className="info">
            <h4>{ amount }K <span>+</span></h4>
            <p>{ title }</p>
        </div>
    )
}

export default Advertisement