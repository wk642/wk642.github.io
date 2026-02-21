import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {children}
    </div>
  );
};

export default Layout;