import { TextField } from '@mui/material';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { arrCities, arrlanguage } from "../../others";
import { arrDayes } from "../../others";
import { addConstraintsOld } from '../../strore/action/old';
import { ThemeProvider} from '@mui/material';
import createCache from '@emotion/cache';
import { FormControl,InputLabel,Select,MenuItem,Checkbox,Radio,Slider,RadioGroup,FormControlLabel } from '@mui/material';
import { FormLabel,createTheme } from '@mui/material';
import { prefixer} from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';

const OldConstraints = (props) => {
    let dis = useDispatch()

    const theme = createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: 'rgb(10,108,109)'
            },
            secondary: {
                main: 'rgb(10,108,109)'
            }
        }
    });

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    return (<>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <div className="flex ">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, }} >
                        <InputLabel sx={{ color: "rgb(10,108,109)" }}>בחר איזור</InputLabel>
                        <Select sx={{ color: "rgb(10,108,109)" }} labelId="demo-simple-select-filled-label" defaultValue={props.props.city} value={props.props.city}
                            onChange={(val) => { dis(addConstraintsOld(val.target.value, "city")) }} >
                            {arrCities.map(item =>
                                <MenuItem sx={{ color: "rgb(10,108,109)" }} key={item.id} value={item.value} >{item.value}</MenuItem>
                            )}
                        </Select>

                    </FormControl>
                </div>
                <div className="lable">
                    <InputLabel sx={{ color: "rgb(10,108,109)" }}>באיזה ימים אתה רוצה עזרה?</InputLabel>
                    {arrDayes.map(i =>
                        <div key={i.id} className="dis mt-mb">
                            <label>{i.value}</label>
                            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25, color: "rgb(10,108,109)" } }} value={i.value} onChange={(val) => dis(addConstraintsOld(val.target.value, "arrDays"))} />
                        </div>)}
                </div>
                <FormControl>

                    <FormLabel id="demo-radio-buttons-group-label" className="mt-mb">בחר מין </FormLabel>
                    <div className="flex">
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label" className="dis"
                            defaultValue={props.props.gender}
                            name="radio-buttons-group"
                            sx={{ color: "rgb(10,108,109)" }}
                        >
                            <FormControlLabel value="זכר" control={<Radio />} label="זכר" onChange={(val) => { dis(addConstraintsOld(val.target.value, "gender")) }} />
                            <FormControlLabel value="נקבה" control={<Radio />} label="נקבה" onChange={(val) => { dis(addConstraintsOld(val.target.value, "gender")) }} />

                        </RadioGroup>
                    </div>

                    <div className="flex mr-s">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, }} >
                            <InputLabel sx={{ color: "rgb(10,108,109)" }}>בחר שפה</InputLabel>
                            <Select sx={{ color: "rgb(10,108,109)" }} labelId="demo-simple-select-filled-label" value={props.props.language}
                                onChange={(val) => { dis(addConstraintsOld(val.target.value, "language")) }} MenuProps={MenuProps}>
                                {arrlanguage.map(item =>
                                    <MenuItem sx={{ color: "rgb(10,108,109)" }} key={item} value={item} >{item}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </div>
                    <TextField id="standard-number" value={props.props.age} sx={{ color: "rgb(10,108,109)", input: { color: 'rgb(10,108,109)' } }} label="גיל" type="number" InputLabelProps={{
                        shrink: true,
                    }}
                        InputProps={{ inputProps: { max: 120 } }}
                        variant="standard"
                        onChange={(val) => { dis(addConstraintsOld(val.target.value, "age")) }} className="mt-mb" />

                </FormControl>
                <div className="center">
                    <h4>בחר רמת פונקציונליות</h4>
                    <Slider defaultValue={props.props.levelOfFunctionality} sx={{ color: "rgb(10,108,109)" }} aria-label="Default" valueLabelDisplay="auto" onChange={(val) => { dis(addConstraintsOld(val.target.value, "levelOfFunctionality")) }} />

                </div>
                {/* <TextField defaultValue={props.props.nation} fullWidth variant="standard" type="text" label="nation" onChange={(val) => { dis(addConstraintsOld(val.target.value, "nation")) }} className="mt-mb" sx={{ input: { color: 'rgb(10,108,109)' } }} /> */}

                <FormLabel id="demo-radio-buttons-group-label" className="mt-mb">בחר מאיזה לאום תרצה את העובד הזר </FormLabel>
                <div className="flex">
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label" className="dis"
                            defaultValue={props.props.nation}
                            name="radio-buttons-group"
                            sx={{ color: "rgb(10,108,109)" }}
                        >
                            <FormControlLabel value="יהודי" control={<Radio />} label="יהודי" onChange={(val) => { dis(addConstraintsOld(val.target.value, "nation")) }} />
                            <FormControlLabel value="אחר" control={<Radio />} label="אחר" onChange={(val) => { dis(addConstraintsOld(val.target.value, "nation")) }} />

                        </RadioGroup>
                    </div>
            </ThemeProvider>
        </CacheProvider>
    </>);
}

export default connect(null, { addConstraintsOld })(OldConstraints);