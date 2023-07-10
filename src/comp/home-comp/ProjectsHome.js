import Project1 from "../../images/img-porjects-webp/project (1).webp";
import Project2 from "../../images/img-porjects-webp/project (2).webp";
import Project3 from "../../images/img-porjects-webp/project (3).webp";
import Project4 from "../../images/img-porjects-webp/project (4).webp";
import Project5 from "../../images/img-porjects-webp/project (5).webp";
import Project6 from "../../images/img-porjects-webp/project (6).webp";
import Project7 from "../../images/img-porjects-webp/project (7).webp";
import Project8 from "../../images/img-porjects-webp/project (8).webp";
import Project9 from "../../images/img-porjects-webp/project (9).webp";
import Project10 from "../../images/img-porjects-webp/project (10).webp";
import Project11 from "../../images/img-porjects-webp/project (11).webp";
import Project12 from "../../images/img-porjects-webp/project (12).webp";
import Project13 from "../../images/img-porjects-webp/project (13).webp";
import Project14 from "../../images/img-porjects-webp/project (14).webp";
import Project15 from "../../images/img-porjects-webp/project (15).webp";

import { Link, NavLink } from "react-router-dom";
import "./ProjectsHome.css";

const ProjectsHome = () => {
  return (
    <div style={{ paddingBottom: "50px" }} className="my-project">
      <h4>My <span>Projects</span></h4>
      <div className="box-projects">
        <div>
          <img src={Project11} alt="img" />
          <div>
            <Link to={"#"} target="_blank"><button>Repository</button></Link>
            <Link to={"#"} target="_blank"><button>Visit</button></Link>
          </div>
        </div>
        <div>
          <img src={Project10} alt="img" />
          <div>
            <Link to={"https://github.com/Yahia-Muhammad/rock-paper-scissors-master"} target="_blank"><button>Repository</button></Link>
            <Link to={"https://yahia-muhammad.github.io/rock-paper-scissors-master/"} target="_blank"><button>Visit</button></Link>
          </div>
        </div>
        <div>
          <img src={Project9} alt="img" />
          <div>
            <Link to={"https://github.com/Yahia-Muhammad/ecommerce-product-page-main"} target="_blank"><button>Repository</button></Link>
            <Link to={"https://yahia-muhammad.github.io/ecommerce-product-page-main/"} target="_blank"><button>Visit</button></Link>
          </div>
        </div>
        <div>
          <img src={Project1} alt="img" />
          <div>
            <Link to={"#"} target="_blank"><button>Repository</button></Link>
            <Link to={"#"} target="_blank"><button>Visit</button></Link>
          </div>
        </div>
        <div>
          <img src={Project4} alt="img" />
          <div>
            <Link to={"#"} target="_blank"><button>Repository</button></Link>
            <Link to={"#"} target="_blank"><button>Visit</button></Link>
          </div>
        </div>
        <div>
          <img src={Project15} alt="img" />
          <div>
            <Link to={"#"} target="_blank"><button>Repository</button></Link>
            <Link to={"#"} target="_blank"><button>Visit</button></Link>
          </div>
        </div>
      </div>
      <div className="mtt">
        <NavLink to={"/projects"}>
          <button className="spichial">All Projects</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectsHome;
