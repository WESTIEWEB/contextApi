import { IAppContext } from "../Interface/AppContextInterface";
import { useAppContext } from "../AppContext/AppContext";
import SelectInput from "./CustomComponent/SelectInput";

const Header = () => {
  const { selectedTeam, teamMemberCount, handleSelectTeam } = useAppContext() as IAppContext;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const teamMemberCount = JSON.parse(JSON.stringify(localStorage.getItem('employees'))).filter((elem: Record<string, any>) => elem.teamName == selectedTeam).length;
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-9'>
          <h1 className='text-center'>
            Team Member Allocation
          </h1>
          <h3 className="text-center">
            { selectedTeam } has { Number(teamMemberCount) <= 1 ?  `${teamMemberCount} member` : `${teamMemberCount}  members` } 
          </h3>
        </div>
      </div>
      <SelectInput value={selectedTeam} onChange={handleSelectTeam}>
        <option value='TeamA'>
          TeamA
        </option>
        <option value='TeamB'>
          TeamB
        </option>
        <option value='TeamC'>
          TeamC
        </option>
        <option value='TeamD'>
          TeamD
        </option>
      </SelectInput>
    </div>
  )
}

export default Header
