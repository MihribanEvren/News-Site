import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/features/newsSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News Site</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => dispatch(setCategory('technology'))}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => dispatch(setCategory('business'))}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => dispatch(setCategory('health'))}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => dispatch(setCategory('sports'))}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => dispatch(setCategory('entertainment'))}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
