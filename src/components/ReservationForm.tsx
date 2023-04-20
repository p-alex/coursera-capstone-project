import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { object, string, number, date } from "yup";
import { fetchAPI, submitAPI } from "../DummyApi";

const initialValues = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
};

const formValidation = object({
  date: date().required(),
  time: string().required(),
  guests: number().required().min(1),
  occasion: string().required(),
});

const ReservationForm = () => {
  const [availableTime, setAvailableTime] = useState<string[]>([]);
  const [loadingTime, setLoadingTime] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: formValidation,
    onSubmit: async (values, formikHelpers) => {
      setIsSuccess(false);
      const isOk = await submitAPI({ formData: values });
      if (isOk) {
        setIsSuccess(true);
        formikHelpers.resetForm();
      }
    },
  });

  const handleSetAvailableTime = () => {
    setLoadingTime(true);
    setAvailableTime([]);
    fetchAPI({ date: new Date(formik.values.date) })
      .then((res) => setAvailableTime(res))
      .catch((error) => console.log(error))
      .finally(() => setLoadingTime(false));
  };

  useEffect(() => {
    if (!formik.values.date) return;
    handleSetAvailableTime();
  }, [formik.values.date]);

  return (
    <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
      <h1 className="text-5xl font-bold mb-4">Book now</h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          aria-errormessage="date-error"
          aria-invalid={
            formik.touched.date && formik.errors.date ? true : false
          }
          className={`border ${
            formik.touched.date && formik.errors.date
              ? "border-red-600"
              : "border-gray-600"
          }`}
          {...formik.getFieldProps("date")}
        />
        {formik.touched.date && formik.errors.date && (
          <p id="date-error" className="text-red-600">
            {formik.errors.date}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          aria-errormessage="time-error"
          aria-invalid={
            formik.touched.time && formik.errors.time ? true : false
          }
          className={`border ${
            formik.touched.time && formik.errors.time
              ? "border-red-600"
              : "border-gray-600"
          }`}
          disabled={loadingTime}
          {...formik.getFieldProps("time")}
        >
          <option value="">{loadingTime ? "Loading..." : "Select time"}</option>
          {availableTime.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        {formik.touched.time && formik.errors.time && (
          <p id="time-error" className="text-red-600">
            {formik.errors.time}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="guests">How many guests?</label>
        <input
          id="guests"
          type="number"
          placeholder="2"
          aria-errormessage="guests-error"
          aria-invalid={
            formik.touched.guests && formik.errors.guests ? true : false
          }
          className={`border ${
            formik.touched.guests && formik.errors.guests
              ? "border-red-600"
              : "border-gray-600"
          }`}
          {...formik.getFieldProps("guests")}
        />
        {formik.touched.guests && formik.errors.guests && (
          <p id="guests-error" className="text-red-600">
            {formik.errors.guests}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          aria-errormessage="occasion-error"
          aria-invalid={
            formik.touched.occasion && formik.errors.occasion ? true : false
          }
          className={`border ${
            formik.touched.occasion && formik.errors.occasion
              ? "border-red-600"
              : "border-gray-600"
          }`}
          {...formik.getFieldProps("occasion")}
        >
          <option value="">Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion && (
          <p id="occasion -error" className="text-red-600">
            {formik.errors.occasion}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          type="submit"
          className="button primaryButton"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? "Loading..." : "Submit"}
        </button>
        {isSuccess && (
          <p className="py-2 px-4 w-max rounded-2xl bg-green-300">Success!</p>
        )}
      </div>
    </form>
  );
};

export default ReservationForm;
