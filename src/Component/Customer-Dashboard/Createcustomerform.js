


import React, { useState } from 'react';
import axios from 'axios';


import url from "../../env.js"



const Createcustomerform = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(null); // Store the generated OTP
    const [enteredOtp, setEnteredOtp] = useState(''); // Store the OTP entered by the user
    const [message, setMessage] = useState('');
    const [isAccountCreated, setIsAccountCreated] = useState(false); // Track if account is created

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleOtpChange = (e) => {
        setEnteredOtp(e.target.value);
    };

    const handleSubmitAccount = async (e) => {
        e.preventDefault();

        // Validate the form inputs
        if (!mobileNumber || !password) {
            setMessage('Mobile number and password are required');
            return;
        }

        try {
            // Make the POST request to the backend API to create the account
            const response = await axios.post(`${url.nodeapipath}/create-customer-acc`, {
                mobileNumber,
                password,
            });

            // Show the success message and OTP for testing purposes
            setOtp(response.data.otp);
            setMessage(response.data.message);

        } catch (error) {
            console.error('Error creating account:', error);
            setMessage('Error creating account. Please try again later.');
        }
    };

    const handleSubmitOtp = (e) => {
        e.preventDefault();

        // Check if the entered OTP matches the generated OTP
        if (enteredOtp === otp.toString()) {
            setIsAccountCreated(true);
            setMessage('Account created successfully!');
        } else {
            setMessage('Incorrect OTP. Please try again.');
        }
    };

    return (
        <div className="create-account-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmitAccount}>
                <div>
                    <label>Mobile Number:</label>
                    <input
                        type="text"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                        placeholder="Enter your mobile number"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>

            {message && <p>{message}</p>}

            {otp && !isAccountCreated && (
                <div>
                    <h3>OTP: {otp}</h3> {/* Display OTP for testing */}
                    <h3>Enter OTP</h3>
                    <form onSubmit={handleSubmitOtp}>
                        <input
                            type="text"
                            value={enteredOtp}
                            onChange={handleOtpChange}
                            placeholder="Enter OTP"
                        />
                        <button type="submit">Verify OTP</button>
                    </form>
                </div>
            )}

            {isAccountCreated && (
                <div>
                    <h3>Account Created Successfully!</h3>
                    <p>Your account has been created successfully. You can now log in.</p>
                </div>
            )}
        </div>
    );
};

export default Createcustomerform;

