import { 
    Volunteer,
    Userprofile,
    Contact,
    SubAdminForm,
    SubadminDetails,
    DonationDetails,
    DriverForm,
    DriverDetails,
    Topslider,
 } from "../Components/Pages";

 const Routes = [
  
    {
        path: "/",
        title: "/",
        exact: true,
        component: () => <Topslider />,
    },
    {
        path: "/volunteer",
        title: "/volunteer",
        exact: true,
        component: () => <Volunteer />,
    },
    {
        path: "/userprofile",
        title: "/userprofile",
        exact: true,
        component: () => <Userprofile />,
    },
    {
        path: "/contact",
        title: "/contact",
        exact: true,
        component: () => <Contact />,
    },
    {
        path: "/subadminform",
        title: "/subadminform",
        exact: true,
        component: () => <SubAdminForm />,
    },
    {
        path: "/subadmindetails",
        title: "/subadmindetails",
        exact: true,
        component: () => <SubadminDetails />,
    },
    {
        path: "/driverform",
        title: "/driverform",
        exact: true,
        component: () => <DriverForm />,
    },
    {
        path: "/driverdetails",
        title: "/driverdetails",
        exact: true,
        component: () => <DriverDetails />,
    },
    {
        path: "/donationdetails",
        title: "/donationdetails",
        exact: true,
        component: () => <DonationDetails />,
    },
   
]
export default Routes

