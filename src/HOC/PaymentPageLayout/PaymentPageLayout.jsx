import React from 'react';
import './paymentPageLayout.scss'
// import FormContainer from "../../components/FormContainer/FormContainer";
import PaymentFormBody from "../../components/PaymentFormBody/PaymentFormBody";
import FormButton from "../../components/FormButton/FormButton";
import FormContainer from "../../components/FormContainer/FormContainer";

function PaymentPageLayout() {
    return (
        <div className='paymentPage'>
            <div className='paymentPageHeader'>
                <div className='paymentPageHeaderLogo'/>
            </div>
            <form className='formContent'>
                <div className='formTitle'>Payment</div>
                <FormContainer/>
            </form>

        </div>
    );
}

export default PaymentPageLayout;