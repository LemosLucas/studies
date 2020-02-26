import React from 'react';
import './DataTable.css';

const DataTable = props => {
    const { dataArray } = props;
    const dataList = dataArray.map((data, index) => {
        return (
            <li key={`${index}${data}`} className='collection-item'>{data}</li>
        );
    })

    return (
        <ul className='collection'>{dataList}</ul>
    );
}

export default DataTable;