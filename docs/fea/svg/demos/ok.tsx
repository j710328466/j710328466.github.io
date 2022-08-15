import React from 'react';
import styles from './index.less'

export default () => {
    return (
        <div className={styles.ok}>
            <svg x="0px" y="0px" width="300px" height="100px" viewBox="0 0 300 100" class="svg1">
            <line className={styles.ok_line} x1="20" y1="50" x2="200" y2="50" stroke="#000" stroke-width="1" ></line>
            </svg>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class={styles.ok_checkmark__circle} cx="26" cy="26" r="25" fill="none"/>
                <path className={styles.ok_checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
        </div>
    )
}