import React, { useState } from "react";
import Header from "../base/Header";
import { useFetchAllEmployeesQuery, EmployeeAPI } from "../../store/services/EmployeeAPI";
import Table from "../elements/Table";
import { IFetchedEmployee } from "../../store/models/IUser";
import { NavLink } from "react-router-dom";

function EmployeesList() {
    
    const jobOptions = [
        {label: 'Backend-разработчик'},
        {label: 'Frontend-разработчик'},
        {label: 'Аналитик'},
        {label: 'Менеджер'},
        {label: 'Дизайнер'},
        {label: 'Fullstack'}
    ]

    const genderOptions = [
        {label: 'Мужчина'},
        {label: 'Женщина'},
    ]

    const technologyOptions = [
        {label: 'C#'},
        {label: 'React'},
        {label: 'Java'},
        {label: 'PHP'},
        {label: 'Figma'},
        {label: 'Word'},
    ]

    const [job, setJob] = useState(false)
    const [gender, setGender] = useState(false)
    const [technology, setTechnology] = useState(false)

    const [filter, setFilter] = useState<string[]>([])

    function handleClick(e: React.MouseEvent<HTMLButtonElement>, option: boolean, setOption: React.Dispatch<React.SetStateAction<boolean>>) {
        e.preventDefault()
        setOption(!option)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, checked} = e.target

        if (checked) {
            setFilter(
                [...filter, id]
            )
        }

        else {
            setFilter(
                filter.filter((e) => e !== id)
            )
        }
    }    

    return(
        <>
            <Header/>
            <div className="max-w-[1560px] mx-auto">
                 <div className="flex text-[18px] h-[77px] items-center gap-[16px]">
                    <NavLink to={'/test'}>Главная</NavLink>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z" fill="#B0B0B0"/>
                    </svg>
                    <a className="text-[#155DA4]">Список сотрудников</a>
                 </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="shrink">
                        <h1 className="text-[40px] font-bold ">Список сотрудников</h1>
                    </div>
                    <div className="flex flex-row gap-[60px]">
                        <div className="">
                            <button className="flex items-center text-[20px] gap-[8px] justify-end ml-auto"
                            onClick={(e) => handleClick(e, job, setJob)}
                            >
                                <div className={job? 'text-[#155DA4]' : ''}>Должность</div>
                                
                                <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                    className={job? 'transform transition-all rotate-180' : 'transform transition-all rotate-0'}>
                                    <path d="M1.67149 0.951206L8.52773 7.47121C9.33744 8.24121 10.6624 8.24121 11.4721 7.47121L18.3284 0.951206" stroke="#155DA4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <ul className={job? "z-10 absolute min-w-[267px] mt-[8px] mx-auto" : 'z-10 absolute min-w-[267px] mt-[8px] mx-auto invisible'}>
                                <div className="relative right-[50%] shadow-[0_4px_4px_0px_#3971A440] p-[20px] bg-white">
                                    {jobOptions.map(e => (
                                    <li className="flex text-[16px]">
                                        <label htmlFor={e.label} className="select-none grow">{e.label}</label>
                                        <input type="checkbox" id={e.label} className="w-[19px]" onChange={handleChange}/>
                                    </li> 
                                    ))}
                                </div>
                            </ul>
                        </div>
                        <div className="">
                            <button className="flex items-center text-[20px] gap-[8px] justify-end ml-auto"
                            onClick={(e) => handleClick(e, gender, setGender)}
                            >
                                <div className={gender? 'text-[#155DA4]' : ''}>Пол</div>
                                
                                <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                    className={gender? 'transform transition-all rotate-180' : 'transform transition-all rotate-0'}>
                                    <path d="M1.67149 0.951206L8.52773 7.47121C9.33744 8.24121 10.6624 8.24121 11.4721 7.47121L18.3284 0.951206" stroke="#155DA4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <ul className={gender? "z-10 absolute min-w-[180px] mt-[8px] mx-auto" : 'z-10 absolute min-w-[267px] mt-[8px] mx-auto invisible'}>
                                <div className="relative right-[60%] shadow-[0_4px_4px_0px_#3971A440] p-[20px] bg-white">
                                    {genderOptions.map(e => (
                                    <li className="flex text-[16px]">
                                        <label htmlFor={e.label} className="select-none grow">{e.label}</label>
                                        <input type="checkbox" id={e.label} className="w-[19px]" onChange={handleChange}/>
                                    </li> 
                                    ))}
                                </div>
                            </ul>
                        </div>

                        <div className="">
                            <button className="flex items-center text-[20px] gap-[8px] justify-end ml-auto"
                            onClick={(e) => handleClick(e, technology, setTechnology)}
                            >
                                <div className={technology? 'text-[#155DA4]' : ''}>Стек технологий</div>
                                
                                <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                    className={technology? 'transform transition-all rotate-180' : 'transform transition-all rotate-0'}>
                                    <path d="M1.67149 0.951206L8.52773 7.47121C9.33744 8.24121 10.6624 8.24121 11.4721 7.47121L18.3284 0.951206" stroke="#155DA4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <ul className={technology? "z-10 absolute min-w-[180px] mt-[8px] " : 'z-10 absolute min-w-[267px] mt-[8px] mx-auto invisible'}>
                                <div className="relative shadow-[0_4px_4px_0px_#3971A440] p-[20px] bg-white">
                                    {technologyOptions.map(e => (
                                    <li className="flex text-[16px]">
                                        <label htmlFor={e.label} className="select-none grow">{e.label}</label>
                                        <input type="checkbox" id={e.label} className="w-[19px]" onChange={handleChange}/>
                                    </li> 
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-[30px] flex">
                    <input type="text" placeholder="Поиск" className="grow p-[10px] border-[#B0B0B0] border-[1px] rounded"/>
                </div>
                <div className="mt-[30px] text-[20px] flex items-baseline justify-between">
                    <div className="flex">
                        <span className="py-[10px]">Список фильтров:</span>  
                        <ul className="flex gap-[20px] ml-2">
                            {filter.map(e => (
                                <li className="bg-[#155DA4] px-[10px] py-[10px] rounded-lg text-white">{e}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <button className="text-white bg-[#155DA4] px-[48px] py-[12px] rounded-lg">Найти</button>
                    </div>
                </div>
                <Table />
            </div>
        </>
    )
}


export default EmployeesList