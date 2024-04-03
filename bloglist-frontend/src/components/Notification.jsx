import { useSelector } from "react-redux"
import { Card, CardBody, Chip } from "@nextui-org/react"


const Notification = () => {
    const content = useSelector(state => state.notification)
    if (content.message !== 'NULL') {
        return (
            <>
            <Chip color={content.color} >{content.message} </Chip>
            </>

        )
    }
}

export default Notification