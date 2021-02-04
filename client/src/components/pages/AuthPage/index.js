import React, { useState } from 'react'
import styled from 'styled-components';
import OtpInput from 'react-otp-input';

function AuthPage() {
    let[isPhoneValidated,setIsPhoneValidated] = useState(false)
    let[userOTP,setUserOTP] = useState('')
    let isPhoneNumber = (value) =>{
        let phonePattern = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
        if(value.match(phonePattern)){
            return true;
        }else{
            return false;
        }
    }
    let handleSendOTPButton = ()=>{
        let OTPinputBox = document.getElementById('OTPphoneNumber');
        if(isPhoneNumber(OTPinputBox.value)){
            OTPinputBox.classList.remove('input-phone-wrong')
            OTPinputBox.classList.add('input-phone-correct')
            setIsPhoneValidated(true)

        }else{
            OTPinputBox.classList.remove('input-phone-correct')
            OTPinputBox.classList.add('input-phone-wrong')
            setIsPhoneValidated(false)
        }
    }

    let handleUserOTPChange = otp => setUserOTP(otp)
    return (
        <StyledAuthPage>
            {   !isPhoneValidated &&
                <div className="phone-form">
                    <label className="label-text" htmlFor="phone">Enter your mobile number</label>
                    <input className="input-phone" type="tel" id="OTPphoneNumber" name="phone"></input>
                    <button onClick={handleSendOTPButton}>Send OTP</button>
                </div>
            }
            {   isPhoneValidated &&
                <div>
                    <OtpInput
                        value={userOTP}
                        onChange={handleUserOTPChange}
                        numInputs={4}
                        inputStyle={
                            {
                                width: 52,
                                height: 52,
                                border: '1px solid #C4C4C4',
                                boxSizing: 'border-box',
                                borderRadius: 12,
                                margin: 'auto 10px',
                                outline: 'none',
                                ontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: 24,
                                lineHeight: 33,
                                color: '#000000'
                            }
                        }
                        errorStyle ={{border: '1px solid #ff0000'}}
                        hasErrored={true}
                    /> 
                    <button>Verify</button>
                </div>
            }

        </StyledAuthPage>
    );
}

export default AuthPage;

let StyledAuthPage = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: calc(100vh - 80px);
    .phone-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .label-text{
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        color: #68000D;
        margin-bottom: 33px;
    }
    .input-phone{
        width: 290px;
        height: 40px;
        border: 2px solid #C4C4C4;
        box-sizing: border-box;
        border-radius: 8px;
        margin-bottom: 33px;
        padding: 20px 10px;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        outline: none;

    }
    .input-phone-wrong{
        border: 2px solid red;
    }
    .input-phone-correct{
        border: 2px solid green;
    }
    button{
        width: 137px;
        height: 37px;
        background: #68000D;
        border-radius: 28px;
        border: none;
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        cursor: pointer;
        outline: none;
    }
`