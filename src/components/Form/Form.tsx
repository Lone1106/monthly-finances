import React from "react";

import classes from "./Form.module.css";

const Form: React.FC = () => {
    return (
        <section className={classes.section}>
            <h1>Monthly Spendings</h1>
            <form className={classes.form}>
                <div className={classes.wrapper}>
                    <div>
                        <label htmlFor="select">Type</label>
                        <select id="select">
                            <option value="in">Income</option>
                            <option value="out">Spending</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="Amount"
                            required
                        />
                    </div>
                </div>

                <button type="Submit">Add</button>
            </form>
        </section>
    );
};

export default Form;
