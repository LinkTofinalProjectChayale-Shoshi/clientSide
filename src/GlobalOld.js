import OldConstraints from "./old/OldConstraints";
import OldRegistration from "./old/OldRegistration";
import PasswordOld from "./old/PasswordOld";
import StepZilla from 'react-stepzilla';
import { connect } from "react-redux";
import SweetAlert from './SweetAlert/SweetAlertSucc'
import { useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import axios from 'axios';
import { arrDayes } from "./others";



const GlobalOld = (props) => {
    let constarinGlobal = {};
    let personalGlobal = {};
    const GlobalOld = {}
    let dayeOld = {}
    // let d={ }
    // const constarinGlobal; = {
    //     'age': 0, 'Level_of_functioningo': 0, 'gender': '', 'idcity': 0, 'addressold': '', 'languageold': '',
    //     'hanacha_and_money_for_hour': 5000, 'passwardold': 0,mail:''
    // }
    const [procces, setProcces] = useState(false)
    const [sweetalert, Setsweetalert] = useState(false)
    const arrdays = []
    const submitFormOld = () => {

        // constarinGlobal.age =props.constraintsOldg.age;
        // constarinGlobal.Level_of_functioningo=props.constraintsOldg.Level_of_functioningo;
        // constarinGlobal.gender=props.constraintsOldg.gender;
        // constarinGlobal.idcity=props.constraintsOldg.idcity;
        // constarinGlobal.addressold=props.personalOldg.addressold;
        // constarinGlobal.languageold=props.constraintsOldg.languageold;
        // constarinGlobal.passwardold=props.personalOldg.passwardold;
        // constarinGlobal.mail=props.personalOldg.mail;
        constarinGlobal = props.constraintsOldg;
        constarinGlobal.mail = props.personalOldg.mail;
        constarinGlobal.passwardold = props.personalOldg.passwardold;
        constarinGlobal.addressold = props.personalOldg.addressold;
        personalGlobal = props.personalOldg
        personalGlobal.ischeck = false;
        personalGlobal.idcity = props.constraintsOldg.idcity
        personalGlobal.nationold = props.constraintsOldg.nationold
        console.log(props.constraintsOldg.arrDays)
        arrDayes.map((item) => {

            if (props.constraintsOldg.arrDays.includes(item.value) === true)
                arrdays.push(true)
            else arrdays.push(false)
        })
        console.log(arrdays)
        dayeOld.days = arrdays
        GlobalOld.co = constarinGlobal;
        GlobalOld.o = personalGlobal;
        GlobalOld.d = dayeOld

        setProcces(true)
        //יש לשנות את הניתוב
        axios({ method: 'post', url: 'https://localhost:44302/api/ConstraintsoldDto', data: GlobalOld })
            .then(function (respon) {
                setProcces(false)
                Setsweetalert(true)

                console.log(respon)
            })
            .catch(function (error) {
                console.log(error);
            });
        // axios({ method: 'post', url: 'https://localhost:44302/api/Old', data: detailsOldForm })
        //     .then(function (respon) {
        //         setProcces(false)
        //         Setsweetalert(true)

        //         console.log(respon)

        //     })
        //     .catch(function (error) {
        //         console.log(error);

        //     });

    }

    const steps =
        [
            { name: 'פרטים אישיים', component: <OldRegistration props={props.personalOldg} /> },
            { name: 'תנאים', component: <OldConstraints props={props.constraintsOldg} /> },
            { name: 'פרטי כניסה', component: <PasswordOld props={props.personalOldg.mail} cb={submitFormOld} /> }

        ]
    return (<>
        <h2 className="title">קשיש</h2>
        <div className='step-progress'>
            {!procces && <StepZilla steps={steps} nextButtonText={"הבא"} backButtonText={"הקודם"} />}
        </div>
        {sweetalert && <SweetAlert />}
        {procces && <SpinnerCircularFixed secondaryColor='rgba(10,108,109)' color='rgb(80,2,58)' thickness={145} size={90} className="spiner" />}
    </>);
}

const GetPersonalOld = (stateOld) => {

    console.log(stateOld)
    return {
        personalOldg: stateOld.oldReducer.old,
        constraintsOldg: stateOld.oldReducer.constraintsOld,
        passwordOldg: stateOld.oldReducer.old.email
    }
}

export default connect(GetPersonalOld)(GlobalOld);