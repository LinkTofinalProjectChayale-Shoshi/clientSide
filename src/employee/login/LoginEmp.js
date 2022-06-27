
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import { ValidationGroup } from 'mui-validate';
import { Validate } from 'mui-validate';
import { AutoDisabler } from 'mui-validate';
import { useEffect, useState } from 'react';
// import { SpinnerCircularFixed, SpinnerRoundOutlined } from 'spinners-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SweetAlertError from '../../SweetAlert/SweetAlertError';







const LoginEmp = () => {
    const [loginEmp, setLoginEmp] = useState({ 'Name': null, 'Password': 0 })
    const[error,setError]=useState(false)
    const [procces, setProcces] = useState('כניסה')

    const navigate = useNavigate();


    const theme = createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: 'rgb(10,108,109)'
            }
        }
    });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    useEffect(()=>{
        setError(false)
    },[error])
    const subLoginEmp = () => {
        setProcces('מתחבר...')
        axios({ method: 'post', url: 'https://localhost:44302/api/ConstraintsoldDto/Login', data: loginEmp })
            .then(function (respon) {
                setProcces('...')
                console.log(respon)
                //  וגם id אמורים לקבל שם לקוח וסטטוס()
                
                navigate("/employee/login/showAndUpdate", {state:{empOrOld:respon.data}})
            })

            .catch(function (error) {
                console.log(error);
                setError(true)
                console.log(error)

            })
    }


    return (<>
        <FormControl>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <Box
                        // component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '45ch' },

                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <ValidationGroup>
                            <div dir="rtl">
                                <h3 className='title'>אנחנו כבר מכירים...</h3>

                                <Validate name="internal key 1" required={[true, 'נדרש להכניס שם משתמש']}>
                                    <TextField fullWidth variant="standard" type="email" label="שם משתמש" onChange={(val) => { setLoginEmp({ ...loginEmp, Name: val.target.value }) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                </Validate>
                                <Validate name="internal key 2" required={[true, 'נדרש להכניס סיסמה']}>
                                    <TextField fullWidth variant="standard" type="password" label="סיסמה" onChange={(val) => { setLoginEmp({ ...loginEmp, Password: val.target.value }) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                </Validate>
                            </div>
                            <AutoDisabler>
                                <Button variant="contained" className="btnn" onClick={subLoginEmp}>{procces}</Button>
                            </AutoDisabler>

                        </ValidationGroup>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </FormControl>
       {error&&<SweetAlertError/>}
        {/* {procces && <SpinnerCircularFixed secondaryColor='rgba(10,108,109)' color='rgb(80,2,58)' thickness={145} size={90} className="spiner" />} */}
    </>);
}

export default LoginEmp;



