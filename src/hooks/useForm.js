import {useEffect, useState} from "react";
import valid from 'card-validator'
import validation from "./validation";


const useForm = () => {

    const [values, setValues] = useState({
        cardHolder: "",
        cardNumber:"",
        cardExpirationMonth:"",
        cardExpirationYear: "",
        cvv:""
    })
    const [errors, setError] = useState({})
    // const [isValid, setIsValid] = useState(false)
    const [cardType, setCardType] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }

    //Set card type
    useEffect(()=>{
        console.log(values)
        console.log(valid.number(values.cardNumber))
        if(valid.number(values.cardNumber).card){
           setCardType(valid.number(values.cardNumber).card.type)
            console.log(valid.number(values.cardNumber).card)
        }
        // if(values.cardHolder && values.cardNumber && values.cardExpirationMonth && values.cardExpirationYear && values.cvv){
            setError(validation(values))


    },[values])

useEffect(()=>{
    console.log(errors)
    // setIsValid(errors.ccvv && errors.cexp && errors.cname && errors.cnumber)
    // if(errors.ccvv && errors.cexp && errors.cname && errors.cnumber){
    //     setIsValid(true)
    // }else{
    //     setIsValid(false)
    // }
},[errors]);


    return { values, cardType, errors, handleChange };
}


export default useForm