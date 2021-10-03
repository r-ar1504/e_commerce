import React from 'react';
import {Form} from '../';

import styles from './LoginBox.module.scss';

export default function LoginBox(){

    return(
        <>
            <div className={`container col-spaced-around ${styles.login_box}`}>
                <Form type={'centered'}/>                
            </div>
        </>
    )

};
