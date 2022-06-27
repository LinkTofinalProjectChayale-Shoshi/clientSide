import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import { FormControl,Box,TextField,Button } from "@mui/material";
import { ThemeProvider,CacheProvider } from "@emotion/react";
import { Validate,ValidationGroup } from "mui-validate";
import { AutoDisabler } from "mui-validate";
import { connect, useDispatch } from "react-redux";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { addPasswordlOld } from "../../strore/action/old";

const PasswordOld = ({props,cb}) => {
   
    let dis=useDispatch()
   const submitpass=()=>{
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

   return ( <>

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
                                    <TextField fullWidth variant="standard" type="password" label="סיסמה" onChange={(val) => { dis(addPasswordlOld(val.target.value)) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                </Validate>
                            </div>
                            <AutoDisabler>
                                <Button variant="contained" onClick={submitpass} className="btnn">שמירת הנתונים</Button>
                            </AutoDisabler>

                        </ValidationGroup>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </FormControl>

   
    </> );
}
 
export default connect(null,{addPasswordlOld}) (PasswordOld);