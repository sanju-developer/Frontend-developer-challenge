import React from 'react';
import { tableHeaderConstant } from '../../utils/constants'

function TableHeader() {
    return (
        <thead className="text-blue">
            <tr>
                {tableHeaderConstant.map((th, index) => (
                    <th
                        className={`${
                            index === 0 || index === 2
                                ? 'w-15'
                                : index === 1
                                    ? 'w-30'
                                    : 'w-50'
                            }`}
                        key={th.key}
                    >
                        {th.text}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader;