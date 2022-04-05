import { Form, Formik } from 'formik';
import React from 'react';
import { ChangeMe } from '../Navbar/models';
import * as Yup from 'yup';
import { TextFormField } from '../FormFields/TextFormField';
import { TextAreaFormField } from '../FormFields/TextAreaFormField';
import { Button } from '../Button/Button';
import emailjs from '@emailjs/browser';

type ContactProps = ChangeMe;
const EMAIL_JS_SETUP = {
    SERVICE_ID: 'service_yxdij2g',
    TEMPLATE_ID: 'template_3ssk0lu',
    USER_ID: 'pT4R62r6T2pHDXyV9'
}
export const Contact: React.FC<ContactProps> = ({ innerRef }) => {
    const INITIAL_VALUES = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        subject: '',
        message: '',
    }

    const VALIDATION_SCHEMA = Yup.object().shape({
        firstName: Yup.string().required('This field is required.'),
        lastName: Yup.string().required('This field is required.'),
        emailAddress: Yup.string().required('This field is required.'),
        message: Yup.string().required('This field is required.'),
    })

    const handleSubmit = (e: ChangeMe) => {
        const { firstName, lastName, emailAddress, message, subject } = e;
        const submission = { from_name: `${firstName} ${lastName}`, subject, reply_to: emailAddress, message };
        emailjs.send(EMAIL_JS_SETUP.SERVICE_ID,
            EMAIL_JS_SETUP.TEMPLATE_ID,
            submission,
            EMAIL_JS_SETUP.USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className='Contact' ref={innerRef}>
            <Formik
                onSubmit={handleSubmit}
                initialValues={INITIAL_VALUES}
                validationSchema={VALIDATION_SCHEMA}
            >
                <Form>
                    <TextFormField name='firstName' label='First name' />
                    <TextFormField name='lastName' label='Last name' />
                    <TextFormField name='emailAddress' label='Email address' />
                    <TextFormField name='subject' label='Subject' />
                    <TextAreaFormField name='message' label='Message' />
                    <Button text={'submit'} type='submit' />
                </Form>
            </Formik>
        </section>
    )
}
