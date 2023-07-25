import React, { memo, useEffect, useState } from "react";
import { RadialCounter } from "../../elements";

const TokenItem = (props) => {
    const [token, _token] = useState(0);

    useEffect(() => {
        handelToken();
    }, []);

    const handelToken = () => {
        var min = 100000;
        var max = 999999;
        _token(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return(
        <div className="w-full flex items-center bg-white border border-gray-200 rounded-lg shadow-none hover:shadow-lg space-x-2 sm:space-x-4 px-4 py-1 transition-all ease-in-out duration-150">
            {/* content */}
            <div className="flex-1 flex items-center space-x-2 sm:space-x-4">
                {/* image */}
                <div className="w-10 h-10">
                    <img
                        src="/assets/images/Binance_Logo.png"
                        alt="token logo"
                        className="w-full h-auto"
                    />
                </div>
                {/* name & token number */}
                <div>
                    <h2 className="text-gray-900 text-xs sm:text-sm capitalize">{props.name}</h2>
                    <p className="text-gray-500 text-3xl leading-none tracking-widest">{token}</p>
                </div>
            </div>

            {/* counter */}
            <div>
                <RadialCounter changeToken={handelToken}/>
            </div>
        </div>
    );
};

export default memo(TokenItem);