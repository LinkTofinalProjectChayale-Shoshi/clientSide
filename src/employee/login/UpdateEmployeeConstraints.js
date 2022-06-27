import { arrCities, arrlanguage } from "../../others";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { arrDayes } from "../../others";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { connect, useDispatch } from "react-redux";
import { addConstarin } from "../../strore/action/employee";



const EmployeeConstraintsUpadte = (props) => {

    let dis = useDispatch();


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

    return (
        <>

            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div className="flex">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, }} >
                            <InputLabel sx={{ color: "rgb(10,108,109)" }}>בחר איזור</InputLabel>
                            <Select sx={{ color: "rgb(10,108,109)" }} labelId="demo-simple-select-filled-label" defaultValue={props.props.citywork} value={props.props.citywork}
                                onChange={(val) => { dis(addConstarin(val.target.value, "citywork")) }} >
                                {arrCities.map(item =>
                                    <MenuItem sx={{ color: "rgb(10,108,109)" }} key={item.id} value={item.value} >{item.value}</MenuItem>
                                )}
                            </Select>

                        </FormControl>

                    </div>
                    <div className="lable">
                        <InputLabel sx={{ color: "rgb(10,108,109)" }}>באיזה ימים אתה רוצה לעבוד?</InputLabel>

                        {

                            arrDayes.map(i =>
                                <div key={i.id} className="dis mt-mb">
                                    <label>{i.value}</label>

                                    <Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 25, color: "rgb(10,108,109)" } }} value={i.value} onChange={(val)=>dis(addConstarin(val.target.value,"arrDayes"))} />
                                </div>)

                        }
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
                                <FormControlLabel value="female"  control={<Radio />} label="זכר" onChange={(val) => { dis(addConstarin(val.target.value, "gender")) }} />
                                <FormControlLabel value="male" control={<Radio />} label="נקבה" onChange={(val) => { dis(addConstarin(val.target.value, "gender")) }} />

                            </RadioGroup>
                        </div>

                        <div className="flex mr-s">
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, }} >
                                <InputLabel sx={{ color: "rgb(10,108,109)" }}>בחר שפה</InputLabel>
                                <Select sx={{ color: "rgb(10,108,109)" }} labelId="demo-simple-select-filled-label" value={props.props.language}
                                    onChange={(val) => { dis(addConstarin(val.target.value, "language")) }} MenuProps={MenuProps}>
                                    {arrlanguage.map(item =>
                                        <MenuItem sx={{ color: "rgb(10,108,109)" }} key={item} value={item} >{item}</MenuItem>
                                    )}
                                </Select>

                            </FormControl>
                        </div>

                        <TextField
                            id="standard-number"  value={props.props.moneyForHour} sx={{ color: "rgb(10,108,109)", input: { color: 'rgb(10,108,109)' } }} label="מספר מחיר לשעה" type="number" InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{ inputProps: { max: 100 } }}
                            variant="standard"
                            onChange={(val) => { dis(addConstarin(val.target.value, "moneyForHour")) }} className="mt-mb"
                        />
                        <TextField
                            id="standard-number" value={props.props.oldAge} sx={{ color: "rgb(10,108,109)", input: { color: 'rgb(10,108,109)' } }} label="גיל זקן" type="number" InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{ inputProps: { max: 120 } }}
                            variant="standard"
                            onChange={(val) => { dis(addConstarin(val.target.value, "oldAge")) }} className="mt-mb"
                        />


                    </FormControl>
                    <div className="center">
                        <h4>בחר רמת פוקציונליות ותפקוד של המטופל</h4>

                        <Slider sx={{ color: "rgb(10,108,109)" }} aria-label="Default" valueLabelDisplay="auto" defaultValue={props.props.levelOfFunctionality} onChange={(val) => { dis(addConstarin(val.target.value, "levelOfFunctionality")) }} />
                    </div>
                </ThemeProvider>
            </CacheProvider>


        </>
    );

}
export default connect(null, {addConstarin})(EmployeeConstraintsUpadte);










