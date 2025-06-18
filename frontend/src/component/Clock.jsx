import React, { useEffect, useState } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="mt-1 px-4 py-2  w-50 h-10 bg-yellow-500 text-white border-2 border-black rounded-lg shadow-md font-mono font-bold rotate-7">
        <div className="flex flex-col items-center mt-2">
            <div className="mt-1 px-4 py-2 bg-red-600 text-white border-2 border-black rounded-lg shadow-md font-mono font-bold transform animate-bounce transition duration-1000 ease-in-out">
                {time}
            </div>
        </div>
        </div>
    );
}

export default Clock;


// import React, { useEffect, useState } from 'react'

// function Clock() {
//     const [time ,setTime]=useState(new Date().toLocaleTimeString());
//     useEffect(()=>{
//        let id= setInterval(()=>{
//              setTime(new Date().toLocaleTimeString());
//         },1000)

//         return ()=>{clearInterval(id)}
//     },[time])
//   return (
//     <div>{time}</div>
//   )
// }

// export default Clock;