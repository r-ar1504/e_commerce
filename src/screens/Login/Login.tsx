import React from 'react';
import {LoginBox} from '../../components';

import styles from './Login.module.scss';
import logo from '../../../public/images/logo.png';

export default function Login(){

    return(
        <div className={`page centered container ${styles.blue_bg}`}>
            <img className={styles.logo} src={logo} alt='lolo' />
            <LoginBox />
        </div>
    )
}