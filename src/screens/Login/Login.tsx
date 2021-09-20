import React from 'react';

import styles from './Login.module.scss';

export default function Login(){

    return(
        <div className={`centered container ${styles.blue_bg}`}>
            <div className={`centered ${styles.login_box}`}>
                
                <h1> {`Welcome <App-Name>`} </h1>
                
            </div>
        </div>
    )
}