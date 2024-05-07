import { NavLink, useNavigate } from "react-router-dom"
import { useFetchAllEmployeesQuery} from "../../store/services/EmployeeAPI"
import { IFetchedEmployee } from "../../store/models/IUser"

function Table() {

    const {data, isLoading, isError} = useFetchAllEmployeesQuery()
    const navigate = useNavigate()

    const handleClick = (employee: IFetchedEmployee) => {
        navigate(`/profile/${employee.id}`)
    }

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error</h1>

    return (
        <>
            <table className="w-[100%] mt-[30px] text-[20px]">
                <tr className="text-[20px] text-[#B0B0B0]">
                    <th className="py-[10px] px-[10px]">ФИО</th>
                    <th>Должность</th>
                    <th>Email</th>
                    <th>Дата рождения</th>
                </tr>
                {data && data.map(employee => (
                    <tr key={employee.name} className="hover:bg-[#F2F2F2] py-[5px] px-[10px]" onClick={() => handleClick(employee)}>
                            <td className="py-[10px] px-[10px]">{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.email}</td>
                            <td>{employee.birth_date}</td>                        
                    </tr>
                ))} 
            </table>
        </>
    ) 
}

export default Table