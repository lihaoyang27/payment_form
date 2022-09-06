import React from 'react';
import './paymentPageLayout.scss'


function PaymentPageLayout({children}) {
    return (
        <div className='paymentPage'>
            <div className='paymentPageHeader'>
                <div className='paymentPageHeaderLogo'/>
            </div>
            {children}
        </div>
    );
}

export default PaymentPageLayout;