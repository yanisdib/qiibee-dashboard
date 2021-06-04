import { css } from '@emotion/css';

export default function FollowButton({ children, symbol, onClick = undefined }) {
    const style = css`
        width: 100%;
        background-color: #005aff;
        font-size: 0.8rem;
        color: #ffffff;
        border-radius: 1rem;
        border: none;
        padding: 5px 5px;
        font-weight: 300;
        text-align: center;
        `
    return (
        <button className={style} data-brand={symbol} onClick={onClick}>
            {children}
        </button>
    );
}