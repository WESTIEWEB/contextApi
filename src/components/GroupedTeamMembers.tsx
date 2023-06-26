/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppContext } from "../AppContext/AppContext"
import { IAppContext } from "../Interface/AppContextInterface"

const GroupedTeamMembers = () => {
    const { teams, handleGroupedTeamMembers } = useAppContext() as unknown as IAppContext;

  return (
    <div className="container mb-4 items-center">
        <div className="row justify-content-center mt-3 mb-3">
            <h1 className="col-12">
                Grouped Team Members
            </h1>
        </div>
       
        {teams.length && teams.map((ele: Record<string, any>) => 
            <div className="card mt-2 col-8" key={ele.team}>
                <h5 className="card-header mt-2 mb-2 pointer text-secondary bg-white text-center" id={ele.team} onClick={handleGroupedTeamMembers}>
                    Team Name: {ele.team}
                </h5>
                {/* <hr /> */}
                { !ele.collapse  && ele.members ? ele.members.map((member: Record<string,any>, index: number) =>
                    <div className="mt-2 text-center" key={index}>
                        <h5 className="card-title">
                            <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>
                            designation: {member.designation}
                        </p>
                        <p>
                            gender: {member.gender}
                        </p>
                    </div>
                    ) : ''
                }
            </div>
        )}

    </div>
  )
}

export default GroupedTeamMembers
