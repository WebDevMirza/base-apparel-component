import "./email.css";
import ArrowIcon from "../../assets/images/icon-arrow.svg";

const Email = () => {
  return (
    <>
      <form>
        <div className="email-form">
          <input className="email-address" name="email" type="email" placeholder="Email Address" />
          <button className="btn" type="submit">
            <img src={ArrowIcon} alt="" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Email;
