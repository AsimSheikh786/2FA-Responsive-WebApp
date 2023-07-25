import React, { memo } from "react";
import { PlusIcon } from "@heroicons/react/24/outline"

const Header = (props) => (
    <div className="sticky top-0 z-30 bg-white pt-6">
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg px-4 py-2">

            {/* heading */}
            <h1 className="text-gray-900 text-sm sm:text-base font-medium uppercase">Tokens</h1>

            {/* add new token button */}
            <button onClick={props.isOpen} className="bg-gray-100 hover:bg-blue-500 w-8 h-8 text-gray-900 hover:text-white rounded-full p-1.5 transition-all ease-in-out duration-150">
                <PlusIcon className="w-full h-auto" />
            </button>
        </div>
    </div>
);

export default memo(Header);