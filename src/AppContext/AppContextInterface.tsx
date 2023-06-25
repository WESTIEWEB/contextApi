export interface AppContextInterface {
    selectedTeam: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    employees: Array<Record<string, any>>;
    setSelectedTeam: React.Dispatch<React.SetStateAction<string>>;
    handleSelectTeam: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleEmployeeCardClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}