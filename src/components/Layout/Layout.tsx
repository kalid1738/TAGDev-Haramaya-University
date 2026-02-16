import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../Shared/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <TopBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;