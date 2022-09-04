import React from 'react';
import PaymentFormBody from "../PaymentFormBody/PaymentFormBody";
import FormButton from "../FormButton/FormButton";
import useForm from "../../hooks/useForm";

function FormContainer(props) {
    const { values, cardType, errors, handleChange, handleSubmit } = useForm()
    return (
        <>
            <PaymentFormBody values={values} errors={errors} handleChange={handleChange} cardType={cardType}/>
            <FormButton errors={errors} handleSubmit={handleSubmit}/>
        </>
    );
}

export default FormContainer;