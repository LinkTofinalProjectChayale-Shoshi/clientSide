import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { arrCities} from '../../others';


const ShowDetilsOld = () => {
    const [city, setCity] = useState('')

    const location = useLocation();

    
   useEffect(()=>
   {
       
    const cities = arrCities.filter(d => d.id === location.state.detailsOld.co.idcity)
    setCity(cities[0])
   },[location])

    return (
        <>
            <div className="card">
                <div className="title">

                    <h2>{location.state.detailsOld.o.fnameold} {location.state.detailsOld.o.lnameold} </h2>
                    <h2>{location.state.detailsOld.co.mail}</h2>
                    <h2>{location.state.detailsOld.co.addressold} {location.state.detailsOld.o.nomhomeold}</h2>
                </div>
                <h3>אילוצים: </h3>
                <div>
                    <p className="con"><strong>איזור מגורים: </strong>{city.value}</p>
                    {/* <p className="con">ימי קבלת סיוע: {location.state.detailsOld.d.days}</p> */}
                    <p className="con"><strong>מין </strong>- {location.state.detailsOld.co.gender}</p>
                    <p className="con"><strong>שפה: </strong>{location.state.detailsOld.co.languageold}</p>
                    <p className="con"><strong>גיל </strong>{location.state.detailsOld.co.age}</p>
                    <p className="con"><strong>רמת פונקציונליות: </strong>{location.state.detailsOld.co.Level_of_functioningo}</p>
                    <p className="con"><strong>לאום העובד זר: </strong>{location.state.detailsOld.o.nationold}</p>
                </div>
            </div>
        </>
    );
}

export default ShowDetilsOld;