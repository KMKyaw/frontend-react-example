import React from "react";

function Header({ text }) {
    return (
        <div>
            <h1 className="text-2xl font-bold">{text}</h1>
        </div>
    );
}

export default Header;
