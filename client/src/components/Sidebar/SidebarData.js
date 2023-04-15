import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/home/dashboard"
    },
    {
        title: "Properties",
        icon: <HolidayVillageIcon/>,
        link: "/home/properties"
    },
    {
        title: "Agents",
        icon: <PeopleIcon/>,
        link: "/home/agents"
    },
    {
        title: "My Profile",
        icon: <AccountBoxIcon/>,
        link: "/home/myprofile"
    },
    {
        title: "Logout",
        icon: <LogoutIcon/>,
        link: "/home/logout"
    },
];