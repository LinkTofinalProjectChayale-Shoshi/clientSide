
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';


const WorkSpaceManager = () => {
    const navigate = useNavigate();
    const [playePlacemant, setPlayPlacemant] = useState(false)
    const playScheduling = () => {
        setPlayPlacemant(true)
        axios.get(`https://localhost:44302/api/Placement/Function`).then((suc) => {
            setPlayPlacemant(false)

            navigate("/Manager/showPlacment", { state: { resultPlacment: suc.data } })



        }).catch((erro) => { console.log(erro) })
    }
    const showPlacement = () => {

        navigate("/Manager/showPlacment")

    }

    const okAndDelete = () => {
        navigate("/Manager/tableDataSystem")
    }
    const showDataUser = () => {
        navigate("/Manager/showsystemData")
    }
    return (<>

        <div className='containerManag'>
            <div className='doAlgoritrm'>
                <h4 className='ss ff'>פעולות לשיבוץ העובדים לקשישים</h4>

                {!playePlacemant&&<Button variant="contained" onClick={playScheduling} className='btnn n'>להפעלת השיבוץ</Button>}
                {!playePlacemant&&<Button variant="outlined" onClick={showPlacement} className='btnOutlin n'>לצפיה בתוצאות השיבוץ</Button>}
                {playePlacemant && <SpinnerDotted color='rgb(80,2,58)'thickness={130} size={70} />}

            </div>

            <div className="managerWork" >
            </div>

            <div className='sss'>
                <h4 className='sss'>פעולות להצגת נתוני הלקוחות</h4>

                <Button variant="contained" onClick={okAndDelete} className='btnn n'>מחיקה ואישור לקוחות</Button>
                <Button variant="outlined" onClick={showDataUser} className='btnOutlin n'>לצפיה בפרטי הלקוחות</Button>


            </div>
        </div>



    </>);
}

export default WorkSpaceManager;