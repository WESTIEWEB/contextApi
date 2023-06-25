import React, { useState } from 'react';
import users from '../employees.json'
import { useContext } from 'react';

interface IProps {
    children: React.ReactNode;
}

const appContext = React.createContext<unknown | undefined>(undefined);

const AppProvider = ({ children }: IProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [employees, setEmployees] = useState<Array<Record<string, any>>>(users || [{}])
    const [selectedTeam, setSelectedTeam] = useState<string>(localStorage.getItem('selectedTeam') || 'TeamA')

    console.log(selectedTeam) 

    const handleSelectTeam = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        setSelectedTeam(e.currentTarget.value)
        localStorage.setItem('selectedTeam', selectedTeam);
    }

    const handleEmployeeCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const transformedUsers = employees.map(elem => elem.id === parseInt(e.currentTarget.id) ? elem.teamName == selectedTeam ? {...elem, teamName: ''} : {...elem, teamName: selectedTeam} : elem );
        setEmployees(transformedUsers)
    }
  return (
    <appContext.Provider value={{
        selectedTeam,
        employees,
        setSelectedTeam,
        handleSelectTeam,
        handleEmployeeCardClick,
    }}>
      {children}
    </appContext.Provider>
  )
}

export default AppProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = useContext(appContext);
    if (context === null) {
        throw new Error('useAppContext must be used within a AppProvider')
    }
    return context;
}
