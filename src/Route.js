

import './App.css';
import './designProject.css'
import './aboutdeshgin.scss'
import GlobalEmloyee from './GlobalEmployee';
import { Route, Routes } from 'react-router-dom';
import LoginEmp from './employee/login/LoginEmp';
import GlobalOld from './GlobalOld';
import ShowAndUpdate from './employee/login/showAndUpdate';
import UpdateGlobalOld from './old/login/UpdateGlobalOld'
import UpadateGlobalEmployee from './employee/login/UpadateGlobalEmployee';
import About from './about';
import Email from './Email';
import ShowDetilsOld from './old/login/showDetilsOld';
import ShowDetilsEmp from './employee/login/ShowDetilsEmp'
import Managers from './Manager/EnterManager';
import WorkSpaceManager from './Manager/workSpaceManager';
import TableDataSystem from './Manager/tableDataSystem';
import ShowSystemDsta from './Manager/showsystemData';
import ShowPlacment from './Manager/showPlacment'
import HomePage from './homePage';

const RoutePage = () => {
    return (<>

        <div className="stepsWrapper">
            <Routes>
<Route path="" element={<HomePage />} />

                <Route path="/emlpoyee" element={<GlobalEmloyee />} />
                <Route path="/old" element={<GlobalOld />} />
                <Route path="/loginemlpoyee" element={<LoginEmp />} />
                <Route path="/employee/login/showAndUpdate" element={<ShowAndUpdate />} />
                <Route path="/old/login/UpdateGlobalOld" element={<UpdateGlobalOld />} />
                <Route path="/employee/login/UpadateGlobalEmployee" element={<UpadateGlobalEmployee />} />
                <Route path="/about" element={<About />} />
                <Route path="/Email" element={<Email />} />
                <Route path="/employee/login/ShowDetilsEmp" element={<ShowDetilsEmp />} />
                <Route path="/old/login/showDetilsOld" element={<ShowDetilsOld />} />
                <Route path="/Manager/EnterManager" element={<Managers />} />
                <Route path="/Manager/workSpaceManager" element={<WorkSpaceManager />} />
                <Route path="/Manager/tableDataSystem" element={<TableDataSystem />} />
                <Route path="/Manager/showsystemData" element={<ShowSystemDsta />} />
                <Route path="/Manager/showPlacment" element={<ShowPlacment />} />
            </Routes>
        </div>




    </>);
}

export default RoutePage;