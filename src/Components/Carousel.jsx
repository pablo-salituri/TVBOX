import Unbox from "../Assets/1_Unbox.jpeg";
import Front from "../Assets/2_Front.jpeg";
import Back from "../Assets/3_Back.jpeg";
import Top from "../Assets/4_Top.jpeg";
import Box from "../Assets/5_Box.jpeg";

export default function Carousel() {
  return (
    <div id="carouselIndicators" className="carousel slide">
      {/* <div className="carousel-indicators">
        <div className="carousel-indicators">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Unbox} className="d-block w-75 mx-auto" alt="Unbox" />
        </div>

        <div className="carousel-item">
          <img src={Front} className="d-block w-75 mx-auto" alt="Front" />
        </div>
        <div className="carousel-item">
          <img src={Back} className="d-block w-75 mx-auto" alt="Back" />
        </div>
        <div className="carousel-item">
          <img src={Top} className="d-block w-75 mx-auto" alt="Top" />
        </div>
        <div className="carousel-item">
          <img src={Box} className="d-block w-75 mx-auto" alt="Box" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
