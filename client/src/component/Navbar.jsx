import React, { useEffect, useState } from 'react';
import AyyKori from "../assets/AyyKori.png";



const Navbar = () => {


  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    // Function to determine the time of day
    function getTimeOfDay(hour) {
      if (hour >= 5 && hour < 12) {
        return 'morning';
      } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
      } else {
        return 'evening';
      }
    }

    // Get the current hour
    const currentHour = new Date().getHours();
    const timeOfDay = getTimeOfDay(currentHour);

    // Set the greeting based on the time of day
    setTimeOfDay(timeOfDay);
  }, []);


  return (
    <div className='text-black flex justify-between mx-[100px] p-5  items-center'>
      <div>
        <img className='h-[40px] w-[150x]' src={AyyKori} />
      </div>
      <div className='font-semibold'>Hlw good {timeOfDay}</div>
      <div class="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <input type="text" placeholder="Search..." class="w-full mr-2 py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <button class="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
      </div>


    </div>
  )
}

export default Navbar