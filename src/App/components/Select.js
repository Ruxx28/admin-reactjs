import React from 'react';
import Select from 'react-select';

export default ({ optionsData, loadingData, onChange}) => {

    return <Select
        isMulti
        isLoading={loadingData}
        isClearable
        isSearchable
        name="colors"
        options={optionsData}
        className="basic-multi-select mb-2"
        classNamePrefix="select"
        placeholder="..."
        onChange={onChange}
    />
}