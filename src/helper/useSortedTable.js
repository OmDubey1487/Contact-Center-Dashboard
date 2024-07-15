import { useEffect, useState } from "react";

export const useSortableTable = (data) => {
 const [tableData, setTableData] = useState(data);

 // Doubt:- we need to subscribe it here. Any workaround?
 useEffect (()=> {
    setTableData (data)
 }, [data])

 const handleSorting = (sortField, sortOrder) => {
  if (sortField) {
   const sorted = [...tableData].sort((a, b) => {
    if (a[sortField] === null) return 1;
    if (b[sortField] === null) return -1;
    if (a[sortField] === null && b[sortField] === null) return 0;
    if (sortField === 'date') { 
        // date is in format MM/DD/YYYY
        const dateA = a[sortField].trim().split('/').map(a => parseInt(a))
        const dateB = b[sortField].trim().split('/').map(a => parseInt(a))
        for (let i = 0; i < 3; ++i) {
            if (dateA[2] !== dateB[2]) return (dateA[2] > dateB[2] ? 1 : -1);
            if (dateA[0] !== dateB[0]) return (dateA[0] > dateB[0] ? 1 : -1);
            if (dateA[1] !== dateB[1]) return (dateA[1] > dateB[1] ? 1 : -1);
            return 0;
        }
    }
    return (
     a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
      numeric: true,
     }) * (sortOrder === "asc" ? 1 : -1)
    );
   });
   setTableData(sorted);
  }
 };

 return [tableData, handleSorting];
};