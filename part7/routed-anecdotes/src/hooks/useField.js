import { useState } from 'react'

const useField = (type) => {
    const [value, setValue] = useState('')
    const set = (event) => {
        setValue(event.target.value)
    }
    const reset = () => {
        setValue('')
    }
    return {
        type, value, set, reset
    }
}

export default useField