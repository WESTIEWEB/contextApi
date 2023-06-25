import female from '../assets/images/femaleProfile.jpeg'
import male from '../assets/images/maleProfile.jpeg'
import { useAppContext } from "../AppContext/AppContext"
import { AppContextInterface } from "../AppContext/AppContextInterface"

const Employee = () => {
    const { employees, handleEmployeeCardClick, handleSelectTeam, selectedTeam } = useAppContext() as unknown as AppContextInterface;
  return (
    <div className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-6'>
                <select value={selectedTeam} onChange={handleSelectTeam} className='form-select form-select-lg'>
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
                </select>
            </div>
        </div>
        <div className='row justify-content-center mt-5 mb-5'>
            <div className='col-8'>
                <div className='card-collection'>
                    {
                        employees.length ? employees.map((elem, index) => 

                        <div onClick={handleEmployeeCardClick} className={elem.teamName == selectedTeam ? 'card pointer highlighted' : 'card pointer'} id={elem.id} key={index}>
                            <img className='card-img-top' src={elem.gender == 'male' ? male : female} />
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    Full Name: {elem.fullName}
                                </h5>
                                <p className='card-title'>
                                    <b>Designation:</b> {elem.designation}    
                                </p>
                            </div>
                        </div>
                        ) : ''
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employee
