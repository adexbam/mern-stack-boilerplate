import React from 'react';
import Layout from './Layout';
import { Helmet } from 'react-helmet';
import './Home.css';


const Home = () => {
    const head = () => (
        <Helmet>
            <meta charSet="utf-8" />
            <title>MERN Stack Boilerplate</title>
            <link rel="canonical" href="https://adewunmi.xyz" />
        </Helmet>
    );
    return (
        <div className="l-page">
            <Layout>
                {head()}
                <div className="col-md-6 offset-md-3 text-center">
                    <h3 className="p-3">React Node MongoDB Authentication</h3>
                    <h5>MERN STACK BOILERPLATE</h5>
                    <hr />
                    <p>
                        MERN stack login register system with account activation, forgot password, reset password, login
                        with facebook and google as well as private and protected routes for authenticated user and users
                        with the role of admin.
                    </p>

                    <p>
                    MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother.
                    </p>

                    <p>
                    The unidirectional data binding offered by React provides a better data overview, which helps to manage large projects. This makes the MERN stack more suitable for managing larger projects.
                    </p>
                </div>
            </Layout>
        </div>
    )
}

export default Home;