
import EmployeeConstraints from './employee/EmployeeConstraints';
import EmpRegister from './employee/EmployeeRegistration';
import StepZilla from "react-stepzilla";
import PasswordEmp from "./employee/PasswordEmp";
import { connect } from "react-redux";
import axios from 'axios';
import SweetAlert from './SweetAlert/SweetAlertSucc'
import { useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import { arrDayes } from './others';




const GlobalEmloyee = (props) => {

    const [procces, setProcces] = useState(false)
    const [sweetalert, Setsweetalert] = useState(false)
    const detailsEmpForm = {'co': {}, 'd':{} ,'f': {} }

    const daysBoolean = []
    const isToday = () => {
        console.log(props.constrainEmpg.arrDays)
        arrDayes.map((day) => {
            if (props.constrainEmpg.arrDays.includes(day.value) == true)
               {daysBoolean.push(true)} 
            else daysBoolean.push(false)
        })
        console.log(daysBoolean)
    }
    const submitFormEmp = () => {

        isToday()

        detailsEmpForm.f = props.personalEmpg
        detailsEmpForm.co = props.constrainEmpg;

        detailsEmpForm.co.mail = props.personalEmpg.mail
        detailsEmpForm.co.passwardwor = props.passwordEmpg
        detailsEmpForm.co.addressfg = props.personalEmpg.addressfg
        //detailsEmpForm.constrain.arrDays = daysBoolean
        detailsEmpForm.d.days = daysBoolean

        detailsEmpForm.f.idcity = props.constrainEmpg.idcity
        detailsEmpForm.f.ischeck = false
        // console.log(props.personalEmpg)
        // console.log(props.constrainEmpg)
        // console.log(props.passwordEmpg)
        console.log(detailsEmpForm)

        setProcces(true)
        

        axios({ method: 'post', url: 'https://localhost:44302/api/Constraintsforeigenworker', data: detailsEmpForm })
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
            { name: 'פרטים אישיים', component: <EmpRegister props={props.personalEmpg} /> },
            { name: 'תנאים', component: <EmployeeConstraints props={props.constrainEmpg} /> },
            { name: 'פרטי כניסה', component: <PasswordEmp props={props.personalEmpg.mail} cb={submitFormEmp} /> }

        ]
    return (<>
        <h2 className='title'>עובד</h2>
        <div className='step-progress'>

            {!procces && <StepZilla steps={steps} nextButtonText={"הבא"} backButtonText={"הקודם"} />}
        </div>
        {sweetalert && <SweetAlert />}
        {procces && <SpinnerCircularFixed secondaryColor='rgba(10,108,109)' color='rgb(80,2,58)' thickness={145} size={90} className="spiner" />}
        {/* { <SpinnerRoundOutlined/> } */}


    </>
    )


}



const GetPersonalEmp = (stateEmp) => {

    return {
        personalEmpg: stateEmp.daysReducer.personalEmp,
        constrainEmpg: stateEmp.daysReducer.constrainEmp,
        passwordEmpg: stateEmp.daysReducer.personalEmp.passwardwor
    }
}

export default connect(GetPersonalEmp)(GlobalEmloyee);

