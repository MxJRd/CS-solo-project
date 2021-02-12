import React, { useContext, useState, useMemo } from 'react';

const PageContext = React.createContext();

function PageProvider({ children }) {
  const [dataStructure, setDataStructure] = useState('Binary_Search_Tree');
  const memo = {};
  // useMemo(async function fetchCall() {
  //   const bstObj = await fetch('/bst');
  //   const textBody = await bstObj.text();
  //   console.log(JSON.parse(textBody));
  //   }
  // )
  // memo[dataStructure] = fetchCall();
  return (
    <PageContext.Provider value={{ dataStructure, setDataStructure }}>
      {children}
    </PageContext.Provider>
  )
};

export {
  PageContext,
  PageProvider
}