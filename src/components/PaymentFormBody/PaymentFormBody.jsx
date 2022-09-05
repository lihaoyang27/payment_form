import React, {useState} from 'react';
import './paymentFormbody.scss'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";



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
    const { values, cardType, errors, handleChange } = props
    const [month, setMonth] = useState(Month)
    const [year, setYear] = useState(getYears())


    /*Card number verification will first detect whether the card type is visa or mastercard,
     and then check the validity of the card number*/


    return (
        <div className='formBodyContainer'>
            <div className='cardTypeField'>
                <div className='cardTypeReminder'>We only accept Master and Visa</div>
                <div className='cardTypeDisplay'>
                    <div className={cardType === 'mastercard' ? 'isMaster' : 'master'}/>
                    <div className={ cardType === 'visa' ? 'isVisa' :'visa'}/>
                </div>
            </div>
            <div  className='inputField' id='paymentForm'>
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
                        error={values.cardHolder.length>0 && (!errors.cname || errors.cnameMsg.length>0)}
                        helperText={values.cardHolder.length>0 && !errors.cname && errors.cnameMsg}
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
                        error={values.cardNumber.length>0 && (!errors.cnumber || !errors.ctype)}
                        helperText={values.cardNumber.length>0 && ((!errors.ctype && errors.ctypeMsg) || (!errors.cnumber && errors.cnumberMsg))}
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
                            error={values.cvv.length>0 && !errors.ccvv}
                            helperText={values.cvv.length>0 && !errors.ccvv && errors.ccvvMsg}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            InputLabelProps={values.cvv.length>0 ? { shrink: true } : {shrink: false}}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

