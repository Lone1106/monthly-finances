import React from "react";

import classes from "./List.module.css";

const List: React.FC = () => {
    return (
        <aside className={classes.list}>
            <ul>
                <li><span>Item name</span><span>Amount</span></li>
                <li><span>Item name</span><span>Amount</span></li>
            </ul>
        </aside>
    );
};

export default List;
