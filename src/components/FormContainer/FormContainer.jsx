import React from 'react';
import PaymentFormBody from "../PaymentFormBody/PaymentFormBody";
import FormButton from "../FormButton/FormButton";

function FormContainer(props) {
    return (
        <div>
            <PaymentFormBody/>
            <FormButton/>
        </div>
    );
}

export default FormContainer;