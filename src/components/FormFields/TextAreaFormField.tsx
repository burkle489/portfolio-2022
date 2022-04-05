import { useField } from 'formik';
import React from 'react'
import { ChangeMe } from '../Navbar/models';

type TextAreaFormFieldProps = ChangeMe;

export const TextAreaFormField: React.FC<TextAreaFormFieldProps> = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className='FormField'>
            <label className='FormLabel'>
                {label}
            </label>
            <textarea className='FormInput FormTextArea' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="FormError">{meta.error}</div>
            ) : null}
        </div>
    )
}
