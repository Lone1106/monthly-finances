import React, { useRef, useState } from "react";

import classes from "./Form.module.css";

const Form: React.FC = () => {
    const spendingName = useRef();
    const amount = useRef();
    const [radio, setRadio] = useState();

    const getFormData = (e) => {
        e.preventDefault();
        // HANDLE FORM DATA
    };

    return (
        <section className={classes.section}>
            <h1>Monthly Spendings</h1>
            <form className={classes.form} onSubmit={getFormData}>
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    className={classes.input}
                    required
                    ref={spendingName}
                />
                <div className={classes.wrapper}>
                    <div>
                        <input
                            id="amount"
                            className={classes.input}
                            type="number"
                            placeholder="Amount"
                            required
                            ref={amount}
                        />
                    </div>
                    <div className={classes.radioGroup}>
                        <label htmlFor="select">In</label>
                        <input
                            type="radio"
                            name="type"
                            onChange={() => setRadio(0)}
                        />
                    </div>

                    <div className={classes.radioGroup}>
                        <label htmlFor="select">Out</label>
                        <input
                            type="radio"
                            name="type"
                            defaultChecked
                            onChange={() => setRadio(1)}
                        />
                    </div>
                    <button type="Submit">Add</button>
                </div>
            </form>
        </section>
    );
};

export default Form;
