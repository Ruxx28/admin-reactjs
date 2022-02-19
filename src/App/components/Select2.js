import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default ({ multi ,defaultValue ,optionsData, loadingData, onChange, clear, disabled}) => {

    return <Select
        components={animatedComponents}
        isDisabled={disabled}
        defaultValue={defaultValue}
        isMulti={multi}
        isLoading={loadingData}
        isClearable={clear ?? false}
        isSearchable
        name="colors"
        options={optionsData}
        className="basic-multi-select mb-2"
        classNamePrefix="select"
        placeholder="..."
        onChange={onChange}
    />
}