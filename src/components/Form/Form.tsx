import React from 'react';
import {Props} from './types';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

export default function Form({type}: Props): React.FunctionComponentElement<Props> {

    return (
        <>
            <div className={`form ${styles[type]}`}> 
                <p>{'something'}</p>
            </div>
        </>
    )

};

Form.propTypes = {
    type: PropTypes.string.isRequired
}