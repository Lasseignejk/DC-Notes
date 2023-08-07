import { useFormik } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, "Must be 15 characters or less")
				.required("Required"),
			lastName: Yup.string()
				.max(20, "Must be 20 characters or less")
				.required("Required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form onSubmit={formik.handleSubmit} className="flex flex-col border-2 gap-2">
			<h1>FormikForm -- Form using formik the long way</h1>
			<div className="flex gap-2">
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.firstName}
					className="border-b-2"
				/>
			</div>
			{formik.errors.firstName && formik.touched.firstName ? (
				<div>{formik.errors.firstName}</div>
			) : null}
			<div className="flex gap-2">
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lastName}
					className="border-b-2"
				/>
			</div>
			{formik.errors.lastName && formik.touched.lastName ? (
				<div>{formik.errors.lastName}</div>
			) : null}

			<div className="flex gap-2">
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
					className="border-b-2"
				/>
			</div>
			{formik.errors.email && formik.touched.email ? (
				<div>{formik.errors.email}</div>
			) : null}
			<div className="flex justify-center">
				<button className="border-2 rounded-full px-3" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default FormikForm;
