import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import MainFooter from "./MainFooter/MainFooter";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <MainHeader/>
            <main style={{minHeight: '100vh'}}>
                {children}
            </main>
            <MainFooter/>
        </>
    );
};

export default Layout;