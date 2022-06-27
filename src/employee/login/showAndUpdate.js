import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
const ShowAndUpdate = () => {
    const location = useLocation();
    const [matchBtn, setmatchBtn] = useState({ old: false, emp: false })
    const navigate = useNavigate();

    useEffect(() => {

        function showBtn() {
            // console.log(location.state.empOrOld)
            if (location.state.empOrOld.co.hasOwnProperty('confid')) {
                // alert("i am foreign worker")
                setmatchBtn({ old: false, emp: true })
            }
            else {
                // alert("i am an old")
                setmatchBtn({ old: true, emp: false })
            }
        }
        showBtn();

    }, [location])

    const ShowDetailsEmp = async () => {
        // await axios.get(`https://localhost:44302/api/Foreign_workerDto/id?=${location.state.empOrOld.id}`).then((repos) => {

        //     console.log(repos.data)
        navigate("/employee/login/ShowDetilsEmp", { state: { detilsEmp: location.state.empOrOld } })
        // }).catch((e) => { console.log(e) })

    }

    const UpdateDetailsEmp = async () => {
        // await axios.get(`https://localhost:44302/api/Foreign_workerDto/id?=${location.state.empOrOld.id}`).then((repos) => {

        //     console.log(repos.data)
        //     repos.data = { firstName: "elishev", lastName: "donat", address: "anacabim8", password: "1234", email: "asd258@gmail.com" }
         navigate("/employee/login/UpadateGlobalEmployee", { state: { detilsEmp: location.state.empOrOld } })
        // }).catch((e) => { console.log(e) })
    }


    const ShowDetailsOld = async () => {
        // await axios.get(`https://localhost:44302/api/Old/id?=${location.state.empOrOld.id}`).then((repos) => {

        //     console.log(repos.data)
        navigate("/old/login/showDetilsOld", { state: { detailsOld: location.state.empOrOld } })
        // }).catch((e) => { console.log(e) })

    }

    const UpdateDetailsOld = async () => {
        // await axios.get(`https://localhost:44302/api/Old/id?=${location.state.empOrOld.id}`).then((repos) => {

        //     console.log(repos.data)
        navigate("/old/login/UpdateGlobalOld", { state: { detailsOld: location.state.empOrOld } })
        // }).catch((e) => { console.log(e) })
    }
    return (<>
        <div className="text-connent">{location.state.empOrOld.id}</div>
        {matchBtn.emp &&<h2 className="text-connent"> שלום: {location.state.empOrOld.f.fnwor} {location.state.empOrOld.f.lnwor} </h2>}
        {matchBtn.old &&<h2 className="text-connent"> שלום: {location.state.empOrOld.o.fnameold} {location.state.empOrOld.o.lnameold} </h2>}
       

        {matchBtn.emp && <Button variant="contained" onClick={ShowDetailsEmp} className="btnn mb">להצגת פרטי עובד</Button>}
        {matchBtn.emp && <Button variant="contained" onClick={UpdateDetailsEmp} className="btnn mb">לעידכון פרטי עובד</Button>}

        {matchBtn.old && <Button variant="contained" onClick={ShowDetailsOld} className="btnn mb">להצגת פרטי קשיש</Button>}
        {matchBtn.old && <Button variant="contained" onClick={UpdateDetailsOld} className="btnn mb">לעידכון פרטי קשיש</Button>}


    </>);
}

export default ShowAndUpdate;