import React from "react";

function List({ users }) {
    return (
        <ul className="flex flex-wrap justify-between items-center gap-y-4 mt-12">
            {users.map((obj, index) => {
                return (
                    <li
                        key={index}
                        className="bg-purple-300 w-[12.5rem] p-4 hover:bg-purple-600 hover:text-white duration-200 ease cursor-default"
                    >
                        <p>{obj.fullname}</p>
                        <p>{obj.email}</p>
                        <p>{obj.pNumber}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default List;
