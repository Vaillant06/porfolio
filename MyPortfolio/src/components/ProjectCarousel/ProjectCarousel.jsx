import "./ProjectCarousel.css";

export default function ProjectCarousel({ project }) {
    if (!project.images) return null;
  
    return (
      <div
        id={`carousel-${project.id}`}
        className="carousel slide mb-4 mx-auto"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        <div className="carousel-indicators">
          {project.images.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target={`#carousel-${project.id}`}
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
            />
          ))}
        </div>
  
        <div className="carousel-inner rounded">
          {project.images.map((img, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <img src={img} className="d-block w-100" alt={`slide-${i}`} />
            </div>
          ))}
        </div>
  
        <button className="carousel-control-prev" type="button"
          data-bs-target={`#carousel-${project.id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
  
        <button className="carousel-control-next" type="button"
          data-bs-target={`#carousel-${project.id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    );
  }
  