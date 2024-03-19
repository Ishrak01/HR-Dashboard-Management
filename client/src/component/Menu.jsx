import React from 'react'
import { Link } from 'react-router-dom'
import appli from '../assets/appli.png'
import cal from '../assets/cal.png'
import career from '../assets/career.png'
import dash from "../assets/dash.png"
import emp from '../assets/emp.png'
import job from '../assets/job.png'
import logout from '../assets/logout.png'
import msg from '../assets/msg.png'
import ref from '../assets/ref.png'
import report from '../assets/report.png'
import setting from '../assets/setting.png'
import str from '../assets/str.png'


const Menu = () => {
  return (
    <div className='flex flex-col font-bold p-3  gap-4'>
      Menu
      <div className='flex flex-col gap-2 '>
        <Link to="/" className='bg-[#11998E] hover:text-white mr-10 '>
          <img src={dash} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />
          Dashboard
        </Link>
        <span className='hover:text-white bg-[#11998E] mr-10'><Link to="/application">
          <img src={appli} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Application</Link></span>

        <span><img src={msg} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Massage</span>
        <span><img src={cal} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Calendar</span>
      </div>
      <p1 className="border rounded-md p-2 mr-10">Recrument</p1>
      <div className='flex flex-col gap-2'>
        <span><img src={job} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Jobs</span>

        <span><img src={career} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Career site</span>
        <span><img src={ref} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />My Referrals</span>
      </div>
      <p1 className="border rounded-md p-2 mr-10">Organization</p1>
      <div className='flex flex-col gap-2'>
        <span><img src={emp} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Employee</span>
        <span><img src={str} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Structure</span>
        <span><img src={report} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Report</span>
        <span><img src={setting} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />Setting</span>
        <span><img src={logout} alt="Dashboard" className="w-8 h-8 inline-block mr-2 " />logout</span>
      </div>
    </div>
  )
}

export default Menu