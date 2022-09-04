import React, {useState} from 'react';
import './paymentFormbody.scss'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import useForm from "../../hooks/useForm";


const Month = [
    '01','02','03','04','05','06','07','08','09','10','11','12'
]

const getYears = () =>{
    let yearArr = [];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 6; i++){
        yearArr.push((currentYear + i).toString())
    }
    return yearArr
}


export default function PaymentFormBody(props) {
    const { values, isValid, cardType, error, handleChange } = useForm()
    const [month, setMonth] = useState(Month)
    const [year, setYear] = useState(getYears())
    
    return (
        <div className='formBodyContainer'>
            <div className='cardTypeField'>
                <div className='cardTypeReminder'>We only accept Master and Visa</div>
                <div className='cardTypeDisplay'>
                    <div className={cardType === 'mastercard' ? 'isMaster' : 'master'}/>
                    <div className={ cardType === 'visa' ? 'isVisa' :'visa'}/>
                </div>
            </div>
            <form className='inputField' id='paymentForm'>
                <div className='inputNameAndNumber'>
                    <TextField
                        variant="outlined"
                        required
                        type='text'
                        id="cardHolder"
                        label="Name on Card"
                        name='cardHolder'
                        value={values.cardHolder}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                        error={values.cardHolder.length>0 && !error.cname}
                        helperText={values.cardHolder.length>0 && !error.cname && error.cnameMsg}
                        InputLabelProps={values.cardHolder.length>0 ? { shrink: true } : {shrink: false}}
                    />
                </div>
                <div className='inputNameAndNumber'>
                    <TextField

                        variant="outlined"
                        required
                        type="text"
                        id="cardNumber"
                        label="Card Number"
                        name='cardNumber'
                        value={values.cardNumber}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                        error={values.cardNumber.length>0 && !error.cnumber}
                        helperText={values.cardNumber.length>0 && !error.cnumber && error.cnumberMsg}
                        InputLabelProps={values.cardNumber.length>0 ? { shrink: true } : {shrink: false}}
                    />
                </div>
                <div className='dateAndCvv'>
                    <div className='date'>
                        <div className='month'>
                            <FormControl sx={{minWidth: 100, width:"100%" }} size="small">
                            <InputLabel id="select-month">Month</InputLabel>
                            <Select
                                required
                                type='text'
                                labelId='select-month'
                                label="Month"
                                id="cardExpirationMonth"
                                name='cardExpirationMonth'
                                value={values.cardExpirationMonth}
                                onChange={handleChange}
                                defaultValue=""

                            >
                                { month.map((month)=>{
                                    return(
                                        <MenuItem value={month} key={month}>{month}</MenuItem>
                                    )
                                })}
                            </Select>
                            </FormControl>
                        </div>
                        <div className='year'>
                            <FormControl sx={{minWidth: 100, width:"100%" }} size="small">
                                <InputLabel id="select-year">Year</InputLabel>
                            <Select
                                required
                                type='text'
                                id="cardExpirationYear"
                                labelId='select-year'
                                label="Year"
                                name="cardExpirationYear"
                                value={values.cardExpirationYear}
                                onChange={handleChange}
                                defaultValue=""

                            >
                                { year.map((year)=>{
                                    return(
                                        <MenuItem value={year} key={year}>{year}</MenuItem>
                                    )
                                })}
                            </Select>
                                </FormControl>
                        </div>
                    </div>
                    <div className='cvv'>
                        <TextField
                            variant="outlined"
                            required
                            type='text'
                            id="cvv"
                            label="CVV"
                            name="cvv"
                            value={values.cvv}
                            error={values.cvv.length>0 && !error.ccvv}
                            helperText={values.cvv.length>0 && !error.ccvv && error.ccvvMsg}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            InputLabelProps={values.cvv.length>0 ? { shrink: true } : {shrink: false}}
                        />
                    </div>
                </div>

            </form>
        </div>
    );
}

