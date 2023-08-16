import "./MainHome.css";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <main className="home-page">
      <div>
        <h3>Hello</h3>
        <h1>
          <span>I'm</span>
          <span>Yahia</span>
        </h1>
        <h2>Front end Developer</h2>
        <div>
          <Link to={"https://github.com/Yahia-Muhammad"} target="_blank">
            <button>
              Github<span className="icon-github1"></span>
            </button>
          </Link>
          <Link
            to={
              "https://drive.google.com/file/d/1LD2jry3-cGwElnyTTh1Okl1ho10uOw9t/view?usp=sharing"
            }
            target="_blank"
          >
            <button>
              My CV<span className="icon-file-text-o"></span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainHome;
