import { Box, FormControl, TextField } from '@mui/material';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addPersonalOld } from '../strore/action/old';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import { Validate } from 'mui-validate';
import { ValidationGroup } from 'mui-validate';
import rtlPlugin from 'stylis-plugin-rtl';

const OldRegistration = (props) => {
    let dispatch = useDispatch()

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




    return (
        <>
            <FormControl>
                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                        <Box sx={{
                            '& > :not(style)': { m: 1, width: '45ch' },

                        }}
                            noValidate
                            autoComplete="off" >

                            <ValidationGroup>
                                <div dir="rtl">
                                    <Validate name="internal key 1" required={[true, 'שם פרטי  חובה']}>
                                        <TextField defaultValue={props.props.fnameold} sx={{ input: { color: 'rgb(10,108,109)' } }} fullWidth id="standard-basic" variant="standard" label="שם פרטי" onChange={(val) => { dispatch(addPersonalOld(val.target.value, "fnameold")) }} className="mt-mb" />

                                    </Validate>

                                    <Validate name="internal key 2" required={[true, 'שם משפחה  חובה']}>
                                        <TextField defaultValue={props.props.lnameold} fullWidth variant="standard" type="text" label="שם משפחה" onChange={(val) => { dispatch(addPersonalOld(val.target.value, "lnameold")) }} className="mt-mb item" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                    </Validate>
                                    <div className='flex-f'>
                                        <Validate name="internal key 3" required={[true, 'כתובת מגורים  חובה']}>

                                            <TextField defaultValue={props.props.addressold} fullWidth variant="standard" type="text" label="כתובת" onChange={(val) => { dispatch(addPersonalOld(val.target.value, "addressold")) }} className="mt-mb item" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                        </Validate>

                                        <Validate name="internal key 4" required={[true, 'מספר בית חובה']}>

                                            <TextField defaultValue={props.props.nomhomeold} fullWidth variant="standard" type="number" label="מספר בית" onChange={(val) => { dispatch(addPersonalOld(val.target.value, "nomhomeold")) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                        </Validate>
                                    </div>
                                    <Validate name="internal key 5" required={[true, 'מייל חובה']}>

                                        <TextField defaultValue={props.props.mail} fullWidth variant="standard" type="email" label="מייל" onChange={(val) => { dispatch(addPersonalOld(val.target.value, "mail")) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} />
                                    </Validate>

                                </div>
                            </ValidationGroup>
                        </Box>
                    </ThemeProvider>
                </CacheProvider>
            </FormControl>
        </>
    );
}

export default connect(null, { addPersonalOld })(OldRegistration);