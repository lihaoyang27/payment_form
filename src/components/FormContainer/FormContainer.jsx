import React from 'react';
import PaymentFormBody from "../PaymentFormBody/PaymentFormBody";
import FormButton from "../FormButton/FormButton";
import useForm from "../../hooks/useForm";
import "./formContainer.scss"

function FormContainer(props) {
    const { values, cardType, errors, handleChange, handleSubmit } = useForm()
    return (
        <>
            <form className='formContent'>
                <div className='formTitle'>Payment</div>
                <PaymentFormBody values={values} errors={errors} handleChange={handleChange} cardType={cardType}/>
                <FormButton errors={errors} handleSubmit={handleSubmit}/>
            </form>
        </>
    );
}

export default FormContainer;