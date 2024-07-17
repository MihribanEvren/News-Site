import image from '../assets/news.jpg';

export const NewsItem = ({ author, title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light d-flex flex-column justify-content-between my-3 mx-3 p-2"
      style={{ maxWidth: '345px', flex: '1 1 auto' }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        alt="..."
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : ''}
        </p>
        <p className="card-text">
          <small>
            {author ? `By ${author.slice(0, 40)}` : 'Author unknown'}
          </small>
        </p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};
