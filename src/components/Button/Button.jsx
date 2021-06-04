import { css} from '@emotion/css';

const style = css`
background-color: #f22979;
font-size: 1rem;
color: #ffffff;
border-radius: 10px;
border: none;
padding: 10px 20px;
font-weight: 300;
`

export default function Button({ children }) {
    return (
        <button className={`qb-button ${style}`}>
            {children}
        </button>
    );
}