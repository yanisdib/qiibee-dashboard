import { css } from '@emotion/css';

export default function ProfileButton({ children }) {
    const style = css`
        width: 100%;
        background-color: #f82a6e;
        font-size: 0.8rem;
        color: #ffffff;
        border-radius: 1rem;
        border: none;
        padding: 5px 5px;
        font-weight: 300;
        `
    return (
        <button className={style}>
            {children}
        </button>
    );
}