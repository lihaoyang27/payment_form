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
    const [error, setError] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [cardType, setCardType] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }

    //Set card type
    useEffect(()=>{
        console.log(values)
        if(valid.number(values.cardNumber).card){
           setCardType(valid.number(values.cardNumber).card.type)
            console.log(valid.number(values.cardNumber).card)
        }
        // if(values.cardHolder && values.cardNumber && values.cardExpirationMonth && values.cardExpirationYear && values.cvv){
            setError(validation(values))


    },[values])

useEffect(()=>{
    console.log(error)
    setIsValid(error.ccvv && error.cexp && error.cname && error.cnumber)
    // if(error.ccvv && error.cexp && error.cname && error.cnumber){
    //     setIsValid(true)
    // }else{
    //     setIsValid(false)
    // }
},[error])


    return { values, isValid, cardType, error, handleChange };
}


export default useForm