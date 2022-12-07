import { RiHome2Line,RiCalendarTodoFill,RiPagesLine,RiBookOpenLine,RiTimerLine,RiBillLine,RiSettings5Line,RiLogoutBoxLine } from 'react-icons/ri';
import { IoLibraryOutline } from 'react-icons/io5';

export const menuItems = [
    {
        path:"/dashboard",
        name : "Dashboard",
        icon: <RiHome2Line className="menu-icon"/>
    },
    {
        path:"/course",
        name : "My Course",
        icon: <RiBookOpenLine className="menu-icon"/>
    },
    {
        path:"/attendance",
        name : "Attendance Report",
        icon: <RiCalendarTodoFill className="menu-icon"/>
    },
    {
        path:"/marksheet",
        name : "Marksheet Report",
        icon: <RiPagesLine className="menu-icon"/>
    },
    {
        path:"/library",
        name : "Library",
        icon: <IoLibraryOutline className="menu-icon"/>
    },
    {
        path:"/class",
        name : "Class Scehdule",
        icon: <RiTimerLine className="menu-icon"/>
    },
    {
        path:"/billing",
        name : "Billing",
        icon: <RiBillLine className="menu-icon"/>
    }
   
]

export const settings = [ 
    {
        path:"/settings",
        name : "Settings",
        icon: <RiSettings5Line className="menu-icon"/>
    },
    {
        path:"/logout",
        name : "Logout",
        icon: <RiLogoutBoxLine className="menu-icon"/>
    }
]