import Location from "../assets/location-icon.svg";

function Cards(props) {
  return (
    <div className="card">
      <div>
        <img src={props.imageUrl} alt={props.alt} className="card-main--img" />
      </div>

      <div className="card-info">
        <div className="card-brief--info">
          <img src={Location} alt="location icon" />
          <span className="country">{props.location}</span>
          <a
            href={props.googleMapsUrl}
            target="_link"
            className="google-map--link"
          >
            View on Google Maps
          </a>
        </div>

        <div className="card-post">
          <h1 className="fs-primary-heading">{props.title}</h1>
          <span className="card-post--subinfo fw-bold">
            {props.startDate} - {props.endDate}
          </span>
          <p className="card-post--info">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
