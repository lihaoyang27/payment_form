import React from 'react';
import './formButton.scss'




function FormButton({errors, handleSubmit}) {


    return (
        <div className='buttonContainer'>
            <div className='buttonArea'>
                <button className='backBtn'
                >
                    Back
                </button>
            </div>
            <div className='buttonArea'>
                <button className='normalBtn' disabled={!errors.isvalid} type='submit' form='paymentForm' onClick={handleSubmit}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default FormButton;