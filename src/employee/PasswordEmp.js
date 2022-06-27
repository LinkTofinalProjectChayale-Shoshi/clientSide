
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
import { useDispatch } from "react-redux";
import { addPassword } from "../strore/action/employee";



const PasswordEmp = ({props,cb}) => {
   
    const disPas=useDispatch();      
    const submitAllData = () => {
    
        cb()
       
    }
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

    return (<>
        {/* <form onSubmit={submitAllData}> */}
     
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
                                <h3 className='title'>נא הכנס סיסמה חדשה...</h3>
                                <TextField fullWidth  defaultValue={props} variant="standard" type="email" label="שם משתמש"  className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                <Validate name="internal key 1" required={[true, 'נדרש להכניס סיסמה']}>
                                    <TextField fullWidth variant="standard" type="password" label="סיסמה" onChange={(val) => { disPas(addPassword(parseInt(val.target.value),"Add_PAsSWORD")) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                </Validate>
                            </div>
                            <AutoDisabler>
                                <Button variant="contained" onClick={submitAllData} className="btnn">שמירת הנתונים</Button>
                            </AutoDisabler>

                        </ValidationGroup>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </FormControl>

        {/* </form> */}

    </>);
}

export default PasswordEmp;