import React, { useState, useEffect } from "react";

function MyForm(props) {
    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [pNumber, setPNumber] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(email, fName, lName, pNumber, password);
    }

    return (
        <React.Fragment>
            <div>
                <form action="" className="space-y-2">
                    <div>
                        <label htmlFor="">Email adress</label>
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            pattern="[A-Za-z]+"
                        />
                    </div>
                    <div>
                        <label htmlFor="">First name</label>
                        <input
                            type="text"
                            onChange={(e) => setFName(e.target.value)}
                            required
                            pattern="[A-Za-z]+"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Last name</label>
                        <input
                            type="text"
                            onChange={(e) => setLName(e.target.value)}
                            required
                            pattern="[A-Za-z]+"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Phone number</label>
                        <input
                            type="text"
                            onChange={(e) => setPNumber(e.target.value)}
                            required
                            pattern="[0-9]{10}"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button onSubmit={handleSubmit}>Submit</button>
                </form>
                <div className="mt-4">
                    <div className="flex gap-x-2">
                        <p className="font-semibold">Email: </p>
                        <p>{email}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="font-semibold">First name: </p>
                        <p>{fName}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="font-semibold">Last name: </p>
                        <p>{lName}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="font-semibold">Phone number: </p>
                        <p>{pNumber}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="font-semibold">Password: </p>
                        <p>{password}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyForm;
