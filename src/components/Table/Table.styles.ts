import styled from 'styled-components'

export const TableContainer = styled.div`
    flex: 1;

    overflow: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        min-width: 600px;
        border-collapse: collapse;

        th {
            padding: 1rem;
            background-color: ${props => props.theme.color['gray-600']};

            text-align: left;
            font-size: ${props => props.theme.font['text-md']};
            color: ${props => props.theme.color['gray-100']};

            &:first-child {
                padding-left: 1.5rem;
                border-top-left-radius: ${props => props.theme.rounded.lg};
            }

            &:last-child {
                padding-right: 1.5rem;
                border-top-right-radius: ${props => props.theme.rounded.lg};
            }
        }

        td {
            padding: 1rem;
            border-top: 0.25rem solid ${props => props.theme.color['gray-800']};
            background-color: ${props => props.theme.color['gray-700']};

            font-size: ${props => props.theme.font['text-md']};
            line-height: 160%;

            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`
