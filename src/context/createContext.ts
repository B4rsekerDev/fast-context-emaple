import React from 'react';

function createContext<T>(name: `${string}Context`) {
  const context = React.createContext<T|null>(null);
  context.displayName = name;
  function useContext() {
    const contextIsDefined = React.useContext(context);
    if (!contextIsDefined) {
      throw new Error(`use${name} must be used within a ${name} Provider`);
    }
    return contextIsDefined;
  }

  return [context.Provider, useContext] as const;
}

export default createContext;
