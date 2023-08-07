import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import MyInput from "./MyInput";

const FormikForm3 = () => {
	return (
		<>
			<h1>FormikForm3 -- Using an input component you make</h1>
			<h1>Subscribe!</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					acceptedTerms: false, // added for our checkbox
					jobType: "", // added for our select
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Must be 15 characters or less")
						.required("Required"),
					lastName: Yup.string()
						.max(20, "Must be 20 characters or less")
						.required("Required"),
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
					acceptedTerms: Yup.boolean()
						.required("Required")
						.oneOf(
							[true],
							"You must accept the terms and conditions."
						),
					jobType: Yup.string()
						.oneOf(
							["designer", "development", "product", "other"],
							"Invalid Job Type"
						)
						.required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}>
				<Form>
					<MyInput
						label="First Name"
						name="firstName"
						type="text"
						placeholder="Jane"
					/>

					<MyInput
						label="Last Name"
						name="lastName"
						type="text"
						placeholder="Doe"
					/>

					<MyInput
						label="Email Address"
						name="email"
						type="email"
						placeholder="jane@formik.com"
					/>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};

export default FormikForm3;
