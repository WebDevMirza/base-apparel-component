import "./card.css";
import CardBody from "./CardBody/CardBody";
import Email from "./Email/Email";
import Logo from "./Logo/Logo";
import ProfilePic from "./ProfilePic/ProfilePic";

const Card = () => {
  return (
    <>
      <div className="wrapper">
        <div className="desktop-card-body">
          <div className="desktop">
            <Logo />
          </div>
          <CardBody />
          <Email />
        </div>
        <div className="card-img">
          <div className="mobile">
            <Logo />
          </div>
          <ProfilePic />
        </div>
      </div>
    </>
  );
};

export default Card;
