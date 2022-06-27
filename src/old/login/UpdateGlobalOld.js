import OldConstraints from "../OldConstraints";
import OldRegistration from "../OldRegistration";
import PasswordOld from "../PasswordOld";
import StepZilla from 'react-stepzilla';
import { connect} from "react-redux";
import SweetAlert from '../../SweetAlert/SweetAlertSucc'
import {useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import { addPersonalEmp } from "../../strore/action/employee";

const GlobalOld = (props) => {

    const detailsOldForm = {'personal':'', 'constraints':''}
    const [procces, setProcces] = useState(false)
    const [sweetalert, Setsweetalert] = useState(false)
    // const location = useLocation();
  
   
    const submitFormOld = () => {
        detailsOldForm.personal = props.personalOldg
        detailsOldForm.constraints = props.constraintsOldg
        detailsOldForm.personal.password = props.passwordOldg
        console.log(detailsOldForm)

        setProcces(true)
        //יש לשנות את הניתוב
        axios({ method: 'post', url: 'https://localhost:44302/api/Old', data: detailsOldForm })
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
            { name: 'פרטים אישיים', component: <OldRegistration props={props.personalOldg} /> },
            { name: 'תנאים', component: <OldConstraints props={props.constraintsOldg} /> },
            { name: 'פרטי כניסה', component: <PasswordOld props={props.personalOldg.email} cb={submitFormOld} /> }

        ]
    return (<>
        <h2 className="title">עידכון קשיש </h2>
        <div className='step-progress'>
            {!procces && <StepZilla steps={steps} nextButtonText={"הבא"} backButtonText={"הקודם"} />}
        </div>
        {sweetalert && <SweetAlert />}
        {procces && <SpinnerCircularFixed secondaryColor='rgba(10,108,109)' color='rgb(80,2,58)' thickness={145} size={90} className="spiner" />}
    </>);
}

const GetPersonalOld = (stateOld) => {


    return {
        personalOldg: stateOld.oldReducer.old,
        constraintsOldg: stateOld.oldReducer.constraintsOld,
        passwordOldg: stateOld.oldReducer.old.email
    }
}

export default connect(GetPersonalOld,{addPersonalEmp})(GlobalOld);