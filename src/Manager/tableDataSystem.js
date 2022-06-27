import axios from "axios";
import { useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const TableDataSystem = () => {
    const navi = useNavigate()
    const [SystemDataEmp, setSystemDataEmp] = useState(null);
    const [SystemDataOld, setSystemDataOld] = useState(null);
    const arrChangeIsCheckEmp = [];
    const arrChangeIsCheckOld = [];
    useEffect(() => {
        async function GetDataEmp() {
            await axios.get(`https://localhost:44302/api/Constraintsforeigenworker`).then((rep) => {
                console.log(rep.data)
                setSystemDataEmp(rep.data)

            })
                .catch((eror) => { console.log(eror); })
        }
        async function GetDataOld() {
            await axios.get(`https://localhost:44302/api/Old`).then((rep) => {
                console.log(rep.data)
                setSystemDataOld(rep.data)

            })
                .catch((eror) => { console.log(eror); })
        }

        GetDataEmp();
        GetDataOld();
    }, [])

    const savechange = () => {
        //שליחת מערך של רשומות שנעשה שינוי בשדה של לקוח מאושר 
        //הרשומה  של  ID מכיל  
        console.log(arrChangeIsCheckEmp)
        // console.log(arrChangeIsCheckOld)
        arrChangeIsCheckEmp.map((item) => {

            axios({ method: 'put', url: `https://localhost:44302/api/Constraintsforeigenworker/${item.id}`, data: item.mydata })
                .then(function (respon) {


                })
                .catch(function (error) {
                    console.log(error)
                })
        })

        console.log(arrChangeIsCheckOld)
        arrChangeIsCheckOld.map((item) => {

            axios({ method: 'put', url: `https://localhost:44302/api/ConstraintsoldDto/${item.id}`, data: item.mydata })
                .then(function (respon) {


                })
                .catch(function (error) {
                    console.log(error)
                })
        })
        navi('/Manager/workSpaceManager')
        //!!!אם זה מצליח אז 
    }

    return (<>
        <h2 className="tex2">פרטי עובד</h2>
        <table>
            <tbody>
                <tr>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>כתובת</th>
                    <th>מייל</th>
                    <th>עובד מאושר</th>
                    <th>מחיקת עובד</th>
                </tr>
                {SystemDataEmp != null && SystemDataEmp.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td >{val.languagefw}</td>
                            <td>{val.gender}</td>
                            <td>{val.addressfg}</td>
                            <td>{val.mail}</td>
                            <td><Checkbox defaultChecked={val.istcheck} onChange={() => { arrChangeIsCheckEmp.push({ 'id': val.confid, 'mydata': val }) }} sx={{ '& .MuiSvgIcon-root': { fontSize: 25, color: "rgb(80, 2, 58)" } }} /></td>
                            <td>
                                <IconButton aria-label="delete" onClick={async () => { await axios.delete(`https://localhost:44302/api/Foreign_workerDto/id?=${val.id}`).then((rep) => { alert('העובד נמחק בהצלחה'); }) }}>
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>

                    )
                })}
            </tbody>
        </table>

        <h2 className="tex2">פרטי קשיש</h2>
        <table>
            <tbody>
                <tr>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>כתובת</th>
                    <th>מייל</th>
                    <th>קשיש מאושר</th>
                    <th>מחיקת קשיש</th>
                </tr>
                {SystemDataOld != null && SystemDataOld.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.fnameold}</td>
                            <td>{val.lnameold}</td>
                            <td>{val.addressold}</td>
                            <td>{val.mail}</td>
                            <td><Checkbox defaultChecked={val.istcheck} onChange={() => { arrChangeIsCheckOld.push({ 'id': val.conoid, 'mydata': val }) }} sx={{ '& .MuiSvgIcon-root': { fontSize: 25, color: "rgb(80, 2, 58)" } }} /></td>
                            <td>
                                <IconButton aria-label="delete" onClick={ async () => {console.log(val.conoID); await axios.delete(`https://localhost:44302/api/Old/${val.conoID}`).then((rep) => { alert('הקשיש נמחק בהצלחה');window.location.reload() }) }}>
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
        <Button variant="contained" onClick={savechange} className='btnn saveManaferVhange'>לשמירת השינויים</Button>
    </>);
}

export default TableDataSystem;