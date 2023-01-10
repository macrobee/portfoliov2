import { createContext, useState, useEffect } from "react";

export const SectionContext = createContext({
  section: "",
  setSection: () => null,
  updateSection: () => null,
});

export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(null);

  useEffect(()=> console.log(section),[section]);

  const updateSection = (sectionName, isVisible) => {if (isVisible){
    setSection(sectionName);
  }};

  const value = { section, setSection, updateSection };

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
};
