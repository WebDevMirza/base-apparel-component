import ProfileM from "../../assets/images/hero-mobile.jpg";
import ProfileD from "../../assets/images/hero-desktop.jpg";

const ProfilePic = () => {
  return (
    <>
      <picture>
        <source media="(min-width: 1024px)" srcSet={ProfileD} />
        <img className="profile-img" src={ProfileM} alt="Profile picture" />
      </picture>
    </>
  );
};

export default ProfilePic;
