export const sortItems = (employees, sortAsc) => {

    if(sortAsc)
    {
        const sortedArray = employees.sort((a,b) => {
            if(a.Name.toLowerCase() < b.Name.toLowerCase()) return -1;
            if(a.Name.toLowerCase() > b.Name.toLowerCase()) return 1;
            return 0;
        })
    
        return sortedArray
    }
    else
    {
        const sortedArray = employees.sort((a,b) => {
            if(a.Name.toLowerCase() > b.Name.toLowerCase()) return -1;
            if(a.Name.toLowerCase() < b.Name.toLowerCase()) return 1;
            return 0;
        })
    
        return sortedArray
    }

   
} 