import '../styles/offer.scss'

const Offer = () => {
  return (
      <div className='offer'>
          <h2 style={{textAlign:'center'}}>What we Offers</h2>
          <div className="offer-card">
            <Card title="Customised Curriculum" desc="Customised sessions and module for Basic, Intermediate and Advanced learners." />
            <Card title="Experimental Learning" desc="Do not study English, rather consume and use it." />
            <Card title="Shadowing Method" desc="Think and speak in English rather than translating it from mother tongue." />
        </div>
      </div>
  )
}

const Card = ({ title,desc }) => {
    return (
        <div className="card">
            <h4>{ title }</h4>
            <p>{ desc }</p>
        </div>
    )
}

export default Offer