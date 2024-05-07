import { NavLink, useParams } from "react-router-dom";
import Header from "../base/Header";
import { useFetchEmployeeQuery } from "../../store/services/EmployeeAPI";

function Profile() {

    const params = useParams()
    const {data} = useFetchEmployeeQuery(`${params.id}`)

    if (!data) return <h1>Пользователь не найден</h1>
    
    const employee = data[0]
    return ( 
        <>
            <Header/>     
            <div className="max-w-[1560px] mx-auto flex flex-col gap-[30px]">
                <div className="flex text-[18px] h-[77px] items-center gap-[16px]">
                    <NavLink to={'/'}>Главная</NavLink>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z" fill="#B0B0B0"/>
                    </svg>
                    <NavLink to={'/'} className='hover:text-[#155DA4]'>Список сотрудников</NavLink>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z" fill="#B0B0B0"/>
                    </svg>
                    <div className="text-[#155DA4]">
                        {employee.name}
                    </div>
                </div>
                <div className="flex flex-row gap-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" id="user" width='300px'>
                    <path d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z">
                    </path>
                    </svg>
                    <div className="mt-[30px] text-[25px]">
                        <div className="">
                            <h1 className="text-[40px] font-bold">{employee.name}</h1>
                        </div>
                        <div className="">
                            Пол: {employee.gender}
                        </div>
                        <div className="">
                            Стек технологий: {employee.technology}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] text-[24px]">
                    <h1 className="text-[32px] font-semibold">Основная информация</h1>
                    <div className="flex gap-[20px] text-[24px]">
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                Email:
                            </li>
                            <li>
                                Дата рождения:
                            </li>
                            <li>
                                Должность:
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                {employee.email}
                            </li>
                            <li>
                                {employee.birth_date}
                            </li>
                            <li>
                                {employee.position}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Profile;