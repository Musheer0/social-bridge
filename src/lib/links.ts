import {  BrainCircuitIcon, CreditCardIcon, LayoutDashboardIcon, Network } from "lucide-react";

export const analytics_links = [
    {
        name:'Dashboard',
        icon:LayoutDashboardIcon,
        href:'/dashboard'
    }
]

export const automation_links = [
    {
        name:'Automations',
        icon:BrainCircuitIcon,
        href:'/automations'
    },
    // {
    //     name:'Templates',
    //     icon:BlocksIcon,
    //     href:'/automations/templates'
    // },
    {
        name:'Linked Accounts',
        icon:Network,
        href:'/linked-accounts'
    },
]
export const plans_links = [
    {
        name:'Plans & Billings',
        icon:CreditCardIcon,
        href:'/billing'
    }
]