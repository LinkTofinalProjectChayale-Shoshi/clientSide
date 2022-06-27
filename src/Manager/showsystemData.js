import { useEffect, useState } from "react";
import axios from "axios";


const ShowSystemDsta = () => {
    const [SystemDataEmp, setSystemDataEmp] = useState(null);
    const [SystemDataOld, setSystemDataOld] = useState(null);


    useEffect(() => {
        async function GetDataEmp() {
            await axios.get(`https://localhost:44302/api/Constraintsforeigenworker`).then((rep) => {
                setSystemDataEmp(rep.data)

                console.log(rep.data)

            })
                .catch((eror) => { console.log(eror); })
        }

        async function GetDataOld() {
            await axios.get(`https://localhost:44302/api/Old`).then((rep) => {
                setSystemDataOld(rep.data)
            }).catch((erro) => { console.log(erro) })
        }
        GetDataEmp();
        GetDataOld();
    }, [])

    return (<>
        <h2 className="tex2">פרטי עובד</h2>
        <table className="customers">
            <tr className="myTr">
                <th className="myTn titl">שם פרטי</th>
                <th className="myTn titl">שם משפחה</th>
                <th className="myTn titl">כתובת</th>
                <th className="myTn titl">מייל</th>
                <th className="myTn titl">ימים בשבוע</th>
                <th className="myTn titl"> איזור</th>
                <th className="myTn titl">מין</th>
                <th className="myTn titl">שפה</th>
                <th className="myTn titl">רמת פונקציונליות</th>
                <th className="myTn titl">סכום לשעה</th>
                <th className="myTn titl">גיל הזקן</th>
            </tr>

            {SystemDataEmp && SystemDataEmp.map((val, key) => {
                return (<tr key={key} className="myTr">
                    <td className="myTn">{val.fnwor}</td>
                    <td className="myTn">{val.lnwor}</td>
                    <td className="myTn">{val.addressfg}</td>
                    <td className="myTn">{val.mail}</td>
                    <td className="myTn">{val.arrDays}</td>
                    <td className="myTn">{val.idcity}</td>
                    <td className="myTn">{val.gender}</td>
                    <td className="myTn">{val.languagefw}</td>
                    <td className="myTn">{val.Level_of_functioningfg}</td>
                    <td className="myTn">{val.money_of_hour}</td>
                    <td className="myTn">{val.age_of_o}</td>
                </tr>)
            }
            )}
        </table>
        <h2 className="tex2">פרטי קשיש</h2>
        <table className="customers mb-table">
            <tr className="myTr">
                <th className="myTn titl">שם פרטי</th>
                <th className="myTn titl">שם משפחה</th>
                <th className="myTn titl">כתובת</th>
                <th className="myTn titl">מייל</th>
                <th className="myTn titl">ימים בשבוע</th>
                <th className="myTn titl"> איזור</th>
                <th className="myTn titl">מין</th>
                <th className="myTn titl">שפה</th>
                <th className="myTn titl">רמת פונקציונליות</th>
                <th className="myTn titl">לאום</th>
                <th className="myTn titl">גיל </th>
            </tr>

            {SystemDataOld && SystemDataOld.map((val, key) => {
                return (<tr key={key} className="myTr">
                    <td className="myTn">{val.fnameold}</td>
                    <td className="myTn">{val.lnameold}</td>
                    <td className="myTn">{val.addressold}</td>
                    <td className="myTn">{val.mail}</td>
                    <td className="myTn">{val.arrDays}</td>
                    <td className="myTn">{val.idcity}</td>
                    <td className="myTn">{val.gender}</td>
                    <td className="myTn">{val.languageold}</td>
                    <td className="myTn">{val.Level_of_functioningo}</td>
                    <td className="myTn">{val.nationold}</td>
                    <td className="myTn">{val.age}</td>
                </tr>)
            }
            )}
        </table>

              

    </>);
}

export default ShowSystemDsta;