import { css } from '@emotion/css';

const style = css`
    background-color: #f22979;
    font-size: 1rem;
    color: #ffffff;
    border-radius: 1rem;
    border: none;
    padding: 12px 20px;
    font-weight: 300;
`

export default function InputButton({ value }) {
    return <input type="submit" className={style} value={value} />;
}