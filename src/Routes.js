import React from 'react'
import Parent from './componetns/home'
import { useRoutes } from "react-router-dom";
import LayOut from './LayOut';
import ServicePage from './componetns/servicepage/ServicePage';
import CompanyPage from './componetns/companypage/CompanyPage';
import CareerPage from './componetns/careerpage/CareerPage';
import CareerInnerpage from './componetns/careerinner/CareerInnerpage';
import BlogPage from './componetns/blogpage/BlogPage';
import BlogPageInner from './componetns/blogpageinner/BlogPageInner';
import TeamPage from './componetns/teampage/TeamPage';
import Contact from './componetns/contactUs/Contact';


export default function Routes() {
    let element = useRoutes([
        {
            element: <LayOut/>,
        children: [
            {path: "/", element: <Parent/>},
            {path: "servicepage", element: <ServicePage/> },
            { path: "company", element: <CompanyPage/> },
            { path: "careerpage", element: <CareerPage/> },
            { path: "careerinner", element: <CareerInnerpage/> },
            { path: "blogpage", element: <BlogPage/> },
            { path: "blogpageinner", element: <BlogPageInner/> },
            { path: "teampage", element: <TeamPage/> },
            { path: "contactUs", element: <Contact/> },

        ]
    },
    ])
  return element
}
