import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../layouts/MainLayout'
import BoxLayout from '../../layouts/BoxLayout'
import { useParams } from 'react-router-dom'
type DetailsType = {
    selectedUser: {
        name: string,
        phone: string,
        email: string,
        company: {
            name: string
        }
    },
    userId: number
}

export default function ContactDetailsBox({ userId }: DetailsType) {

    const { user } = useParams()
    console.log("param user", user)
    const userData = useContext(UserContext)

    const [selectUser, setSelectUser] = useState([]);
    
    useEffect(() => {
        if(user != undefined){
            const selectedUser = userData?.filter(item => item?.id === Number(user))
            console.log(selectedUser)
            setSelectUser(selectedUser)
        }
        
    }, [user, userData])

    console.log("selected", selectUser)
    return <BoxLayout>
        <h4>USER CONTACT DETAILS</h4>

        {selectUser != undefined && selectUser?.length > 0? <>
            <div className="contactDetailsBox">
                <p>Get in touch with {selectUser[0]?.name}</p>
                <hr />
                <p>Email: <a href={`mailto:${selectUser[0]?.email}`}>{selectUser[0]?.email}</a></p>
                <p>Phone: {selectUser[0]?.phone}</p>
                <p>Company: {selectUser[0]?.company?.name}</p>
                <p>Address: Strassenname, City</p>
            </div>
        </>
            : <div></div>
        }
    </BoxLayout>
}
