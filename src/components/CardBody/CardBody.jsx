import "./cardbody.css";
const CardBody = () => {
  return (
    <>
      <div className="card-body">
        <h1 className="card-title mb-16">
          We're <span className="text-accent">coming soon</span>
        </h1>
        <p className="card-text mb-24">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date
          with announcements and our launch deals.
        </p>
      </div>
    </>
  );
};

export default CardBody;
