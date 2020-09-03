import React from 'react'
import { FormControl, InputLabel, Select } from '@material-ui/core'

const MultipleSelect = ({ id, label, onChange, multiple,input, children }) => (
    <FormControl>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
            multiple={multiple}
            id={id}
            labelId={`${id}-label`}
            onChange={onChange}
            defaultValue={multiple ? [] : ''}
        >
            {children}
        </Select>
        {input ? <input type='text' placeholder='Other' onChange={onChange}></input> : null}
    </FormControl>
)

export default MultipleSelect
