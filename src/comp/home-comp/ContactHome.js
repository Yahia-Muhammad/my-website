import './ContactHome.css';
import { NavLink } from 'react-router-dom';

const ContactHome = () => {
  return (
    <div className="contact-me">
      <div className="inside-contact-me">
        <h4 style={{margin: "25px 0"}}>Do You Have Project?</h4>
        <h6 style={{margin: "25px 0"}}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus.
        </h6>
        <NavLink to={"/contact"}><button style={{margin: "25px 0"}}>Contact Me</button></NavLink>
      </div>
    </div>
  );
};

export default ContactHome;
