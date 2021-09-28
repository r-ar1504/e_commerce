import React from 'react';
import {Home} from '../../components';

import styles from './Login.module.scss';
import logo from '../../../public/images/logo.png';

export default function Login(){

    return(
        <div className={`page centered container ${styles.blue_bg}`}>
la
            <img className={styles.logo} src={logo} alt='lolo' />
            <div className={`container col-spaced-around ${styles.login_box}`}>
                
                <h1> {`Welcome Back <Generic> !`} </h1>
                
            </div>
        </div>
    )
}