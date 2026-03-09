import '../styles/BeautyCard.css';
const BeautyCard = ({ title, text, image }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="beauty-card">

        <div className="beauty-card-image">
          <img src={image} alt={title} />
        </div>

        <div className="beauty-card-body">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>

      </div>
    </div>
  );
};

export default BeautyCard;