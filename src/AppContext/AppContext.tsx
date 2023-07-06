import React, { useState } from 'react';
import users from '../employees.json'
import { useContext } from 'react';
import { IProps } from '../Interface/CommonInterface';
const appContext = React.createContext<unknown | undefined>(undefined);

const AppProvider = ({ children }: IProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [employees, setEmployees] = useState<Array<Record<string, any>>>(users || [{}])
    const [selectedTeam, setSelectedTeam] = useState<string>(localStorage.getItem('selectedTeam') || 'TeamA')
    const [teamMemberCount, setTeamMemberCount] = useState<number>(0);
    const [teams, setTeams] = useState<Array<Record<string,any>>>([{}]);

    // store the selectedTeam, employees array to be persisted in the browser local storage
    React.useEffect(() => {
        localStorage.setItem('selectedTeam', selectedTeam)
        localStorage.setItem('employees', JSON.stringify(employees))
        setTeamMemberCount(employees.filter(elem => elem.teamName == selectedTeam).length)
    }, [employees])

    // a function that handles changes in team selection
    const handleSelectTeam = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        // e.preventDefault();
        setSelectedTeam(e.currentTarget.value);
    }

    // fuctions that handles adding and removall of a team member
    const handleEmployeeCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const transformedUsers = employees.map(elem => elem.id === parseInt(e.currentTarget.id) ? elem.teamName == selectedTeam ? {...elem, teamName: ''} : {...elem, teamName: selectedTeam} : elem );
        setEmployees(transformedUsers)
    }

    // function that handles display of members of a particular group
    const handleGroupedTeamMembers = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setSelectedTeam(e.currentTarget.id);
        // setTeams(employees.filter((elem: Record<string, any>) => elem.teamName == e.currentTarget.id));
    }
    // console.log(teams, 'teams')

    // Grouping employees by team
    const GroupTeamMembers = () => {
        const team: any [] = [];
       
        const groupAmembers = employees?.filter((item: Record<string, any>) =>  item.teamName == selectedTeam);
        const groupA = { team: 'TeamA', members: groupAmembers, collapse: selectedTeam == 'TeamA' ? false: true }
        team.push(groupA)
       
        const groupBmembers = employees?.filter((item: Record<string, any>) =>  item.teamName == selectedTeam)
        const groupB = { team: 'TeamB', members: groupBmembers, collapse: selectedTeam == 'TeamB' ? false: true }
        team.push(groupB)
       
        const groupCmembers = employees?.filter((item: Record<string, any>) =>  item.teamName == selectedTeam)
        const groupC = { team: 'TeamC', members: groupCmembers, collapse: selectedTeam == 'TeamC' ? false: true }
        team.push(groupC)
       
        const groupDmembers = employees?.filter((item: Record<string, any>) =>  item.teamName == selectedTeam)
        const groupD = { team: 'TeamD', members: groupDmembers, collapse: selectedTeam == 'TeamD' ? false: true }
        team.push(groupD)
        setTeams(team);
       }

       React.useEffect(() => {
        GroupTeamMembers()
       },[selectedTeam])
  return (
    <appContext.Provider value={{
        selectedTeam,
        employees,
        setSelectedTeam,
        handleSelectTeam,
        handleEmployeeCardClick,
        teamMemberCount,
        handleGroupedTeamMembers,
        teams,
        setTeams,
        GroupTeamMembers
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
