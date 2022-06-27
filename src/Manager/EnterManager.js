// import PasswordField from 'material-ui-password-field'
import { Button } from "@mui/material";
import { FormControl } from '@mui/material';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Managers = () => {
    const navigate = useNavigate('');
    const [enterManage, setenterManage] = useState({pass:0,mass:''});
    const enterManager = () => {
   
        if (enterManage.pass === '1234')
        navigate("/Manager/workSpaceManager")
        else 
       setenterManage({mass:"הסיסמה שגויה, בטוח שאתה המנהל?"})

    }

    return (<>
        <h3 className='text-connent'>נא הכנס סיסמת מנהל</h3>

        <FormControl>


            {/* <PasswordField
                
                   className="passowrdManager"/> */}
            <TextField fullWidth variant="standard" type="password" onChange={(val) => { setenterManage({pass:val.target.value}) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
            <div className="error" >{enterManage.mass}</div>
            <Button variant="contained" className="btnn mtMa" onClick={enterManager}>היכנס להרשאות מנהל</Button>

        </FormControl>
    </>);
}

export default Managers;