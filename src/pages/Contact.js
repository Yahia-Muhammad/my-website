import Header from "../comp/Header";
import Footer from "../comp/Footer";
import "./Contact.css";
import { useContext, useState, useEffect } from "react";
import themeContext from "../config/Theme";
import { Helmet } from "react-helmet-async";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { theme } = useContext(themeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [booleanMessage, setBooleanMessage] = useState();
  const [stateSendMessage, setStateSendMessage] = useState(-100);

  return (
    <div className={theme}>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="ya7ia website front end developer, yahia muhammad i can help you create your website" />
      </Helmet>
      <Header />
      <main className="contact-page">
        <div>
          <h2>Contact</h2>
        </div>
      </main>
      <div className="contact">
        <div className="inside-contact">
          <div>
            <div className="title-message">
              <h5>Don't Be Shy!</h5>
            </div>
            <div style={{ marginBottom: "35px" }} className="end-message">
              <p>
                Thank you for visiting my website. I hope it met your
                expectations. If you have any questions, comments, or
                suggestions, please don't hesitate to send me a message. I will
                be happy to respond to you as soon as possible.
              </p>
            </div>
            <div className="contacts-location">
              <div>
                <div>
                  <span className="icon-map"></span>
                </div>
                <div>
                  <p>Adress Point</p>
                  <p>Cairo, Egypt</p>
                </div>
              </div>
              <div>
                <div>
                  <span className="icon-envelope-open"></span>
                </div>
                <div>
                  <p>Mail Me</p>
                  <p>K7odary@gmail.com</p>
                </div>
              </div>
              <div>
                <div>
                  <span
                    style={{ fontSize: "2.4rem" }}
                    className="icon-phone-square"
                  ></span>
                </div>
                <div>
                  <p>Call Me</p>
                  <p>01015678247</p>
                </div>
              </div>
            </div>
          </div>
          <form>
            <input
              type="text"
              placeholder="Name *"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
            <input
              type="text"
              placeholder="Email Address *"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
            <input
              type="text"
              placeholder="Phone *"
              onChange={(e) => {
                setPhone(`${e.target.value}`);
              }}
              value={phone}
              required
            />
            <textarea
              placeholder="Message"
              style={{ height: "150px" }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              required
            />
            <input
              style={{ cursor: "pointer" }}
              type="submit"
              value="Send Message"
              onClick={async (e) => {
                e.preventDefault();
                if (message.length > 2) {
                  const id = new Date().getTime();
                  await setDoc(doc(db, "Messages", `${id}`), {
                    id: id,
                    name: name,
                    email: email,
                    phone: parseInt(phone),
                    message: message,
                  });
                  setName("");
                  setEmail("");
                  setPhone("");
                  setMessage("");
                  setBooleanMessage(true);
                } else {
                  setBooleanMessage(false);
                }
                setStateSendMessage(-1);
                setTimeout(() => {
                  setStateSendMessage(-100);
                }, 3000);
              }}
            />
          </form>
        </div>
      </div>
      <div
        style={{ right: `${stateSendMessage}%` }}
        className={`state-send-message`}
      >
        {booleanMessage && <p>Message Send Successfully</p>}
        {!booleanMessage && <p>Something Wrong Check Your Message</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
