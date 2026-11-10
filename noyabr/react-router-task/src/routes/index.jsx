import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import AboutLayout from "../components/Layout/AboutLayout";

export const ROOT = [
    {
        path: '/',
        element:<Layout />,
        children:[
            {
                index:true,
                element:<Home />
            },
           
            {
                path:'/product',
                element:<Product />
            }
        ]
    },
     {
        path: '/',
        element:<AboutLayout />,
        children:[
            {
                path:'/about',
                element:<About />
            },
          
        ]
    }
]