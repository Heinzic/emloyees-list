import { useParams } from "react-router-dom";

function Profile() {

    const params = useParams()
    
    return ( 
        <>
            Профиль
            {params.id}
        </>
     );
}
 
export default Profile;