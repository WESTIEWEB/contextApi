import female from '../assets/images/femaleProfile.jpeg'
import male from '../assets/images/maleProfile.jpeg'
import { useAppContext } from "../AppContext/AppContext"
import { IAppContext } from "../Interface/AppContextInterface"

const Employee = () => {
    const { employees, handleEmployeeCardClick, selectedTeam } = useAppContext() as unknown as IAppContext;
  return (
    <div className='container'>
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
