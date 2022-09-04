import React, {useEffect} from 'react';
import useForm from "../../hooks/useForm";
import './formButton.scss'
import {logDOM} from "@testing-library/react";



function FormButton({errors}) {


    return (
        <div className='buttonContainer'>
            <div className='buttonArea'>
                <button className='backBtn'
                >
                    Back
                </button>
            </div>
            <div className='buttonArea'>
                <button className='normalBtn' disabled={!errors.isvalid} type='submit' form='paymentForm'>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default FormButton;