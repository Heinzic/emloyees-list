import React, { useState } from "react";
import Header from "../base/Header";

function EmployeesList() {
    
    const jobOptions = [
        {
            label: 'Backend-разработчик', 
            value: 'backend'
        },
        {label: 'Frontend-разработчик', value: 'frontend'},
        {label: 'Аналитик', value: 'analytics'},
        {label: 'Менеджер', value: 'managment'},
        {label: 'Дизайнер', value: 'design'},
        {label: 'Fullstack', value: 'fullstack'}
    ]

    const [isOpen, setIsOpen] = useState(false)


    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Header/>
            <div className="max-w-[1560px] mx-auto">
                 <div className="flex text-[18px] h-[77px] items-center gap-[16px]">
                    <a>Главная</a>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z" fill="#B0B0B0"/>
                    </svg>
                    <a>Список сотрудников</a>
                 </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="shrink">
                        <h1 className="text-[40px] font-bold">Список сотрудников</h1>
                    </div>
                    <div className="">
                        <button className="flex items-center text-[20px] gap-[8px] justify-end ml-auto"
                        onClick={handleClick}
                        >
                            <div className={isOpen? 'text-[#155DA4]' : ''}>Должность</div>
                            
                            <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                className={isOpen? 'transform transition-all rotate-180' : 'transform transition-all rotate-0'}>
                                <path d="M1.67149 0.951206L8.52773 7.47121C9.33744 8.24121 10.6624 8.24121 11.4721 7.47121L18.3284 0.951206" stroke="#155DA4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        {isOpen && <ul className="z-10 absolute min-w-[267px] mt-[8px] mx-auto">
                            <div className="relative right-[50%] shadow-[0_4px_4px_0px_#3971A440] p-[20px]">
                                {jobOptions.map(e => (
                                <li className="flex text-[16px]">
                                    <label htmlFor={e.label} className="select-none grow">{e.label}</label>
                                    <input type="checkbox" id={e.label} className="w-[19px]"/>
                                </li> 
                                ))}
                            </div>
                        </ul>}
                    </div>
                    
                </div>                
            </div>
        </>
    )
}


export default EmployeesList