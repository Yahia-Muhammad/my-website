import './MainHome.css';
import { Link } from 'react-router-dom';

const MainHome = () => {
  return (
    <main className="home-page">
        <div>
          <h3>Hello</h3>
          <h1>I'm Yahia</h1>
          <h2>Front end Developer</h2>
          <div>
            <Link to={"https://github.com/Yahia-Muhammad"} target="_blank"><button>Github<span className="icon-github1"></span></button></Link>
            <Link to={"https://drive.google.com/file/d/1BgaBpH-J2cGt-762UTrVymJhWIBSm7B_/view?usp=drive_link"} target="_blank"><button>My CV<span className="icon-file-text-o"></span></button></Link>
          </div>
        </div>
      </main>
  );
}

export default MainHome;
