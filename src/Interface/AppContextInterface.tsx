export interface IAppContext {
    selectedTeam: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    employees: Array<Record<string, any>>;
    setSelectedTeam: React.Dispatch<React.SetStateAction<string>>;
    handleSelectTeam: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleEmployeeCardClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    teamMemberCount: number;
    handleGroupedTeamMembers: (e: React.MouseEvent<HTMLDivElement>) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    teams: Array<Record<string,any>>;
    GroupTeamMembers: () => void;
}