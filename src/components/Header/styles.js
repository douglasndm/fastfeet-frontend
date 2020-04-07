import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 10px 30px;
`;

export const Content = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            max-width: 170px;
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }

        a {
            font-weight: bold;
            margin-right: 40px;
            color: #ddd;
            transition: color 0.2s;

            &:hover {
                color: #444;
            }
        }
    }

    aside {
        a {
            color: red;
        }
    }
`;

export const User = styled.div``;
