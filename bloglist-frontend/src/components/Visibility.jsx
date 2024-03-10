import {forwardRef, useImperativeHandle, useState} from 'react'

const VisibilityComponent = forwardRef((props, ref) => {
    // sets visbility to true or false.
    const [visibility, setVisibility] = useState(false)
    const notVisible = visibility ? null : {display: 'none'}
    const toggleVisibility = () => {
        setVisibility(!visibility)
    }
    // Uses ref to export togglingVisibility to the rest of the component to be used by NewBlog
    useImperativeHandle(ref, () => {
        return {toggleVisibility}
    })
    return (
        // renders children when appropriate
        <>
            <div style={notVisible}>
                {props.children}
            </div>
            <button onClick={() => toggleVisibility()}>{visibility ? props.visiblemessage : props.invisiblemessage}</button>
        </>
        
    )
})

export default VisibilityComponent