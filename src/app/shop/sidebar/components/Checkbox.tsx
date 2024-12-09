import React from 'react'

const Checkbox = ({name, label, color}: {name:string, label:string, color: string}) => {
    const oldColor = color.replace('checked:','');
    return (
        <div className='flex justify-start items-center gap-2'>
            <input type="checkbox" name={name} className={`${oldColor} size-4 ${color}`} />
            <p className='text-gray-400 font-lato'>{label}</p>
        </div>
    )
}

export default Checkbox
