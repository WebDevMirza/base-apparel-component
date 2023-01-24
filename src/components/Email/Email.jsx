import "./email.css";
import ArrowIcon from "../../assets/images/icon-arrow.svg";
import ErrorIcon from "../../assets/images/icon-error.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const Email = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("worng email").required("email is required"),
    }),
    onSubmit: (values) => {
      alert(`Your email address is ${values.email}.`);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="email-form">
          <input
            className="email-address"
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <img className="bg-error" src={ErrorIcon} alt="" /> : null}
          <button className="btn" type="submit" aria-label="submit">
            <img src={ArrowIcon} alt="" />
          </button>
          {formik.touched.email && formik.errors.email ? <p className="error">Please provide a valid email</p> : null}
        </div>
      </form>
    </>
  );
};

export default Email;
