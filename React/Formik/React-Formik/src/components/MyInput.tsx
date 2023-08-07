import { useField } from "formik";

interface InputProps {
	label: string;
	name: string;
	type: string;
	placeholder: string;
}

const MyInput = ({ label, ...props }: InputProps) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<input className="text_input w-36" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export default MyInput;
