import "./email.css";
import ArrowIcon from "../../assets/images/icon-arrow.svg";
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
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="email-form">
          <input
            className={formik.touched.email && formik.errors.email ? "email-address bg-error" : "email-address"}
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button className="btn" type="submit">
            <img src={ArrowIcon} alt="" />
          </button>
          {formik.touched.email && formik.errors.email ? <p className="error">Please provide a valid email</p> : null}
        </div>
      </form>
    </>
  );
};

export default Email;
