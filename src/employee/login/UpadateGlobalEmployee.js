
import EmployeeConstraintsUpadte from './UpdateEmployeeConstraints';
import EmpRegisterUpdate from './UpadateEmployeeRegistration'
import StepZilla from "react-stepzilla";
import PasswordEmpUpadte from "./UpadatePasswordEmp ";
import { connect } from "react-redux";
import axios from 'axios';
import SweetAlert from '../../SweetAlert/SweetAlertSucc'
import { useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';

// import { flagUpdate, setFlageUpdate } from '../../others';
// import { useLocation } from 'react-router-dom';



const GlobalEmloyee = (props) => {

    const [procces, setProcces] = useState(false)
    const [sweetalert, Setsweetalert] = useState(false)
    const detailsEmpForm = { 'personal': '', 'constrain': '' }
    //   console.log(props)

    const submitFormEmp = () => {
        detailsEmpForm.personal = props.personalEmpg
        detailsEmpForm.constrain = props.constrainEmpg;
        detailsEmpForm.personal.password = props.passwordEmpg
        detailsEmpForm.ischecked = false
        // console.log(props.personalEmpg)
        // console.log(props.constrainEmpg)
        // console.log(props.passwordEmpg)
        console.log(detailsEmpForm)


        setProcces(true)
        axios({ method: 'post', url: 'https://localhost:44302/api/Foreign_workerDto', data: detailsEmpForm })
            .then(function (respon) {
                setProcces(false)
                Setsweetalert(true)

                console.log(respon)

            })
            .catch(function (error) {
                console.log(error);

            });

    }
    const steps =
        [
            { name: 'פרטים אישיים', component: <EmpRegisterUpdate props={props.personalEmpg} /> },
            { name: 'תנאים', component: <EmployeeConstraintsUpadte props={props.constrainEmpg} /> },
            { name: 'פרטי כניסה', component: <PasswordEmpUpadte props={props.personalEmpg.email} cb={submitFormEmp} /> }

        ]
    return (<>
        <h2 className='title'>עידכון עובד </h2>
        <div className='step-progress'>

            {!procces && <StepZilla steps={steps} nextButtonText={"הבא"} backButtonText={"הקודם"} />}
        </div>
        {sweetalert && <SweetAlert />}
        {procces && <SpinnerCircularFixed secondaryColor='rgba(10,108,109)' color='rgb(80,2,58)' thickness={145} size={90} className="spiner" />}
       


    </>
    )


}

 
const GetPersonalEmpUpdate = (stateEmp) => {

// const locaion=useLocation();
    // switch (flagUpdate) {
    // case false:
    //     setFlageUpdate(true)
    //     return {
    //         personalEmpg: location.state.detilsEmp,
    //         constrainEmpg: stateEmp.daysReducer.constrainEmp,
    //         passwordEmpg: stateEmp.daysReducer.personalEmp.password
    //     }

    // default:


    // if (stateEmp.daysReducer.personalEmp.firstName === '') {
    //     return {
    //         personalEmpg: location.state.detilsEmp,
    //         constrainEmpg: stateEmp.daysReducer.constrainEmp,
    //         passwordEmpg: stateEmp.daysReducer.personalEmp.password

    //     }
    // }
    // else {
    
    
    // console.log(stateEmp)
    return {
        personalEmpg: stateEmp.daysReducer.personalEmp,
        constrainEmpg: stateEmp.daysReducer.constrainEmp,
        passwordEmpg: stateEmp.daysReducer.personalEmp.password
    }
}
// }



export default connect(GetPersonalEmpUpdate)(GlobalEmloyee);

