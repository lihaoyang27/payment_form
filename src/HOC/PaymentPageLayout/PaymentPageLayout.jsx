import React from 'react';
import './paymentPageLayout.scss'
// import FormContainer from "../../components/FormContainer/FormContainer";
import PaymentFormBody from "../../components/PaymentFormBody/PaymentFormBody";
import FormButton from "../../components/FormButton/FormButton";

function PaymentPageLayout() {
    return (
        <div className='paymentPage'>
            <div className='paymentPageHeader'>
                <div className='paymentPageHeaderLogo'/>
            </div>
            <div className='pageContent'>
                <div className='formTitle'>Payment</div>
                {/*<FormContainer/>*/}
                <PaymentFormBody/>
                <FormButton/>
            </div>

        </div>
    );
}

export default PaymentPageLayout;