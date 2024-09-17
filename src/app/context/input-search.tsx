"use client";
import React from "react";

type SearchContextType = {
  search: string;
  setSearch: (search: string) => void;
  room: string;
  setRoom: (room: string) => void;
  transactionType: string;
  setTransactionType: (transactionType: string) => void;
  typeRealState: string;
  setTypeRealState: (typeRealState: string) => void;
};

const SearchContext = React.createContext({} as SearchContextType);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [transactionType, setTransactionType] = React.useState("");
  const [typeRealState, setTypeRealState] = React.useState("");
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        room,
        setRoom,
        transactionType,
        setTransactionType,
        typeRealState,
        setTypeRealState,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export const useSearch = () => React.useContext(SearchContext);
