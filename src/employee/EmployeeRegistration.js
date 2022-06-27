import { addPersonalEmp } from "../strore/action/employee";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import FormControl from '@mui/material/FormControl';
import { Validate } from 'mui-validate';
import { ValidationGroup } from 'mui-validate';
import { connect, useDispatch } from "react-redux";


const EmpRegister = (props) => {
    const disEmpPer = useDispatch();
    
   
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
                                <Validate name="internal key 1" required={[true, 'שם פרטי  חובה']}>
                                    <TextField defaultValue={props.props.fnwor} sx={{ input: { color: 'rgb(10,108,109)' } }} fullWidth id="standard-basic" variant="standard" label="שם פרטי" onChange={(val) =>{ disEmpPer(addPersonalEmp(val.target.value, "firstName"))} } className="mt-mb" />
          
                                </Validate>

                                <Validate name="internal key 2" required={[true, 'שם משפחה  חובה']}>
                                    <TextField defaultValue={props.props.lnwor} fullWidth variant="standard" type="text" label="שם משפחה" onChange={(val) => { disEmpPer(addPersonalEmp(val.target.value, "lastName")) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                </Validate>
                                <Validate name="internal key 3" required={[true, 'כתובת מגורים  חובה']}>

                                    <TextField defaultValue={props.props.addressfg} fullWidth variant="standard" type="text" label="כתובת" onChange={(val) => { disEmpPer(addPersonalEmp(val.target.value, "address")) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                </Validate>
                                <Validate name="internal key 4" required={[true, 'מייל חובה']}>

                                    <TextField defaultValue={props.props.mail} fullWidth variant="standard" type="email" label="מייל" onChange={(val) => { disEmpPer(addPersonalEmp(val.target.value, "email")) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                </Validate>

                            </div>
                        </ValidationGroup>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </FormControl>



    </>);
}


export default connect(null, { addPersonalEmp })(EmpRegister);