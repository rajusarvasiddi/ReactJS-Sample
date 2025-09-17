import { useFormik, FormikProvider } from "formik";
import { z } from "zod";
import { sanitizeName } from "../../utils/validation.util";
import "./EnrollStudent.css";

const enrollmentSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }).trim(),
});

const EnrollStudentForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validate: (values) => {
      const result = enrollmentSchema.safeParse(values);
      if (!result.success) {
        const formattedErrors: Record<string, string> = {};
        const errorMap = result.error.format();

        if (errorMap.firstName?._errors?.length) {
          formattedErrors.firstName = errorMap.firstName._errors[0];
        }
        return formattedErrors;
      }
      return {};
    },

    onSubmit: (values) => {
      console.log("Form data ::", values);
    },
  });

  const { errors, values, handleChange, handleBlur, handleSubmit, touched } =
    formik;

  return (
    <FormikProvider value={formik}>
      <main className="flex-1 p-4 overflow-auto student-enrollment">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          Enrollment Form
        </h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="bg-white border shadow p-4">
            {/* First Name */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label
                htmlFor="firstName"
                className="md:w-1/3 text-gray-700 font-medium"
              >
                First Name
              </label>
              {/* <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
                className="md:w-2/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 py-1 text-sm"
              /> */}
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={(e) => {
                  const sanitizedValue = sanitizeName(e.target.value);
                  formik.setFieldValue("firstName", sanitizedValue);
                }}
                onBlur={handleBlur}
                placeholder="First Name"
                className="md:w-2/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 py-1 text-sm"
              />
              {(touched.firstName || formik.submitCount > 0) &&
                errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </div>
                )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enroll
              </button>
            </div>
          </div>
        </form>
      </main>
    </FormikProvider>
  );
};

export default EnrollStudentForm;
