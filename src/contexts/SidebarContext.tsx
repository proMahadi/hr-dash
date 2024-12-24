import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";


interface SidebarContextType {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}


const SidebarContext = createContext<SidebarContextType | undefined>(undefined);


export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
