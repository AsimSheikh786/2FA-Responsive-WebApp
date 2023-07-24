import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { memo, useState } from "react";

const AddToken = (props) => {
    const [form, _form] = useState({
        name: '',
        order: null
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
        props.onClose();
      };

    return(
        <div className={`${props.isOpen ? 'translate-x-0' : 'translate-x-full'} absolute top-0 right-0 z-50 w-full h-full bg-black/70 transition-all ease-in-out duration-500`}>
            <div className="relative w-full max-w-lg h-full bg-white flex flex-col items-center justify-center float-right space-y-10 p-6 overflow-auto">
                {/* close button */}
                <button onClick={props.onClose} className="absolute top-6 right-6 bg-gray-100 hover:bg-red-500 w-8 h-8 text-gray-900 hover:text-white rounded-full p-1.5 transition-all ease-in-out duration-150">
                    <XMarkIcon className="w-full h-auto" />
                </button>

                {/* heading */}
                <h2 className="text-gray-900 text-3xl text-center">Add Token</h2>

                {/* form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* title */}
                    <div className="flex flex-col">
                        <label>Title*</label>
                        <input
                            type='text'
                            placeholder="Enter title"
                            required
                            onChange={(e) => _form({ ...form, name: e.target.value })}
                            className="appearance-none w-full bg-white focus:outline-none border border-gray-200 focus:border-blue-500 rounded-lg p-2"
                        />
                    </div>

                    {/* order */}
                    <div className="flex flex-col">
                        <label>Set order</label>
                        <input
                            type='number'
                            placeholder="Enter order"
                            onChange={(e) => _form({ ...form, order: parseInt(e.target.value) })}
                            className="appearance-none w-full bg-white focus:outline-none border border-gray-200 focus:border-blue-500 rounded-lg p-2"
                        />
                    </div>

                    {/* submit */}
                    <input type='submit' className="appearance-none w-full bg-blue-500 hover:bg-blue-600 text-white focus:outline-none rounded-full cursor-pointer p-2" value='Submit' />
                </form>
            </div>
        </div>
    );
};

export default memo(AddToken);