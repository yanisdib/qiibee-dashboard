import { css } from '@emotion/css';
import React from 'react'

export default function TokenData({ amount = '0', title = '', colorScheme = 'primary' }) {
    const color = colorScheme === 'primary' ? '0060ff' : 'f82a6e';
    const style = css`
        color: #${color};
        border: solid 3px #${color};
        border-radius: 1.5rem;
        word-break: break-word;
    `;
    const localeAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "’");
    return (
        <div className={`col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ${style} mt-4 mt-sm-4 mt-md-4 mt-lg-0 mt-xl-0 mt-xxl-0 ps-4 pe-4 pt-3 pb-3 text-center`}>
            <h1 className="fw-7 figure">{localeAmount}</h1>
            <h6 className={`fw-6 ${css`font-size: 0.85rem`}`}>{title.toUpperCase()}</h6>
        </div>
    )
}
