import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { arrCities } from '../../others';
const ShowDetilsEmp = () => {
    const location = useLocation()
    const [city, setCity] = useState('')
    // const [findDays, setfindDays]=useState([])


    //אפשרות 1
    // const [stringDays,setStringDays] =useState( 
    //     stringDays=[{ id: 1, value: 'יום ראשון', b: true }, { id: 2, value: 'יום שני', b: false }, { id: 3, value: 'יום שלישי', b: false },
    // { id: 4, value: 'יום רביעי', b: false }, { id: 5, value: 'יום חמישי', b: true }, { id: 6, value: 'יום שישי', b: false }, { id: 7, value: 'יום שבת', b: false }]
    // )
    useEffect(() => {

        const cities = arrCities.filter(d => d.id === location.state.detilsEmp.co.idcity)
        setCity(cities[0])

        console.log(location.state.detilsEmp.d.days)
        //1
        // location.state.detilsEmp.d.days.map((i)=>{
        //     setfindDays(findDays=>[...findDays,i])
        // })
//אפשרות שניה

        //     console.log(location.state.detilsEmp.d.days)
        //   location.state.detilsEmp.d.days.map((i, key) => {
        //         if (i === true)
        //           setStringDays(...stringDays, stringDays[key].b = i) 
        //     })
            // console.log(findDays)
    },[location])



    return (
        <>
       
            <div className="card">
                <div className="title">
                    <h2>{location.state.detilsEmp.f.fnwor} {location.state.detilsEmp.f.lnwor} </h2>

                    <h2>{location.state.detilsEmp.co.mail}</h2>
                    <h2>{location.state.detilsEmp.co.addressfg}</h2>
                </div>
                <h3>אילוצים: </h3>
                <div>
                    <p className="con"><strong>האיזור בו תעבוד: </strong> {city.value} </p>
                    <p className="con"><strong>ימי העבודה:</strong>

                    {/* 1 */}
                        {/* {stringDays.map((d) => 

                         { d.b && <div key={d.id}>{d.value}</div> }
                        )
                        } */}
                        {/* 2 */}
                        {/* {arrDayes.map((d,i) => 
                        {findDays[i] && <div key={d.id}>{d.value}</div> }
                        )
                        } */}

                    </p>
                    <p className="con"><strong>מין </strong>- {location.state.detilsEmp.co.gender}</p>
                    <p className="con"><strong>שפה: </strong>{location.state.detilsEmp.co.languagefw}</p>
                    <p className="con"><strong>גיל הזקן</strong> {location.state.detilsEmp.co.age_of_o}</p>
                    <p className="con"><strong>רמת פונקציונליות הרצויה  של המטופל:</strong> {location.state.detilsEmp.co.Level_of_functioningfg}</p>
                    <p className="con"><strong>שכר לשעה: </strong>{location.state.detilsEmp.co.money_of_hour}</p>
                </div>
            </div>
        </>
    );
}

export default ShowDetilsEmp;