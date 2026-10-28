import React from "react";

function Card({person}){
    if (!person) {
        return null; // Return null if person is not provided
    }
    return (
<ul role="list" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4">
      <li className="flex py-4 first:pt-0 last:pb-0 items-center">
        <img className="h-10 w-10 rounded-full object-cover" src={person.imageUrl} alt={person.name} />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
        </div>
      </li>
    </ul>
    )
}
export default Card;