import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { UserActions } from "../redux/reducers/user.reducer";
import { useDispatch } from "react-redux";
import { registration } from '../api/rest/registration'
import { TextField, Button } from '@material-ui/core';

function Registration(props) {

    //redux
    const dispatch = useDispatch();
    const logIn = () => {
        dispatch(
            UserActions.replaceProfile({ username: "MichaleShumsky" })
        );
        dispatch(
            UserActions.changeLogged(true)
        );
    };

    //vars and states
    const [userData, setUserData] = useState({
        login: null,
        password: null,
        passwordConfirmation: null,
        name: null,
        lastName: null,
        bday: null,
        bmonth: null,
        byear: null,
    });

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [isLoginWrong, setIsLoginWrong] = useState(false);
    const [isPasswordSafe, setIsPasswordSafe] = useState(true);

    const [isName, setIsName] = useState(true);
    const [isLastName, setIsLastName] = useState(true);
    const [isBDate, setIsBDate] = useState(true);
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false)

    const isLogAndPasswordEntered = isPasswordSafe && !isLoginWrong && passwordValue !== '' && loginValue !== '';

    //regular exp.
    let emailRegExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    let phoneNumberRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    let nameRegExp = /^[\wА-Яа-я]{2,20}$/i;
    let bDateRegExp = /^\d{1,2}\.\d{1,2}\.\d{4}$/;

    //useEffects and funcs
    useEffect(() => {
        if (passwordValue.length >= 8 || passwordValue === '') {
            setIsPasswordSafe(true);
            setUserData((userData) => ({ ...userData, password: passwordValue }));
        } else {
            setTimeout(() => {
                setIsPasswordSafe(false)
            }, 1500);

        }
    }, [passwordValue])

    useEffect(() => {
        const isEmail = emailRegExp.test(loginValue);
        const isNumber = phoneNumberRegExp.test(loginValue) && loginValue.length > 10;

        if (!(isEmail || isNumber || loginValue === '')) {
            setTimeout(() => {
                setIsLoginWrong(true);
            }, 1500);
        } else {
            setIsLoginWrong(false);
            setUserData((userData) => ({ ...userData, login: loginValue }));

        }

    }, [loginValue])

    useEffect(() => {
        if (passwordValue === passwordConfirmation) {
            setIsPasswordConfirmed(true);
            setUserData((userData) => ({ ...userData, passwordConfirmation: passwordConfirmation }));
        } else if (passwordConfirmation !== '') {
            // setTimeout(() => {
            setIsPasswordConfirmed(false)
            // }, 1500);
        }

    }, [passwordValue, passwordConfirmation])

    const isValueCorrect = (dataType, value, regExp, inputState) => {
        const isCorrect = regExp.test(value);
        if (!isCorrect && value !== '') {
            // setTimeout(() => {
            inputState(false)
            // }, 1500);

        } else {
            inputState(true)
            setUserData((userData) => ({ ...userData, [dataType]: value }));

        }
    }
    const bDateHandler = (value) => {
        const isFormatCorrect = bDateRegExp.test(value);
        const littleMonths = [2, 4, 6, 9, 11];
        if (!isFormatCorrect) { setIsBDate(false) }
        else {
            let dateArr = value.split('.');
            let year = dateArr[2];
            let month = dateArr[1];
            let day = dateArr[0];

            setIsBDate(true);
            // setTimeout(() => {
            if (year >= 2006 || year <= 1900) { setIsBDate(false); }
            if (month > 12 || month <= 0) { setIsBDate(false); }
            if (day > 31 || day <= 0) { setIsBDate(false); }
            if (littleMonths.includes(month) && day === 31) { setIsBDate(false); }
            if (month == 2 && day >= 30) { setIsBDate(false); }
            if (year % 4 !== 0 && month == 2 && day == 29) { setIsBDate(false); }
            // }, 1500);
            setUserData((userData) => ({ ...userData, bday: day, bmonth: month, byear: year }));
        }
    }
    const registerRequest = () => {

        let isDataEntered = userData.login && userData.password && userData.passwordConfirmation && userData.name && userData.lastName && userData.byear;
        console.log(userData);
        if (isDataEntered) {
            registration(userData.login, userData.password, userData.passwordConfirmation, userData.name, userData.lastName, Number(userData.bday), Number(userData.bmonth), Number(userData.byear));
        } else {
            console.log(userData.bday);
        };
    }




    //render
    return (
        <div className='Registration__container'>
            <h1 className='Registration__title'>Registration</h1>
            <div className='Registration__wrapper'>

                <TextField id="standard-basic" variant="outlined" label="email or number" type="email" value={loginValue} onChange={(e) => setLoginValue(e.target.value)} type='text' />
                {isLoginWrong && <div>Please, enter a correct email or number</div>}
                <TextField id="standard-basic" variant="outlined" label="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} type='password' />
                {!isPasswordSafe && <div>Password should include 8 signs min </div>}
                <TextField id="standard-basic" variant="outlined" label="Confirm password" onChange={(e) => setPasswordConfirmation(e.target.value)} type='password' />
                {!isPasswordConfirmed && <div>Passwords are different</div>}

            </div>

            { isLogAndPasswordEntered &&
                <div className='Registration__wrapper'>
                    <TextField className='Registration__input' id="standard-basic" variant="outlined" label='first name' onChange={(e) => isValueCorrect('name', e.target.value, nameRegExp, setIsName)} />
                    {!isName && <div>Enter a correct name</div>}
                    <TextField className='Registration__input' id="standard-basic" variant="outlined" label='last name' onChange={(e) => isValueCorrect('lastName', e.target.value, nameRegExp, setIsLastName)} />
                    {!isLastName && <div>Enter a correct surname</div>}
                    {/* <input placeholder='dd.mm.yyyy' onChange={(e) => isValueCorrect('age', e.target.value, ageRegExp, setIsAge)} /> */}
                    <TextField className='Registration__input' id="standard-basic" variant="outlined" label='dd.mm.yyyy' onChange={(e) => bDateHandler(e.target.value)} />
                    {!isBDate && <div>Enter a correct age</div>}

                </div>
            }

            <Button className='Registration__button' variant="contained" color="primary" onClick={registerRequest}>Зарегистрироваться</Button>
            <Button color="primary"><Link to='/login'>Уже есть аккаунт?</Link></Button>

        </div>
    );
}

export default Registration;