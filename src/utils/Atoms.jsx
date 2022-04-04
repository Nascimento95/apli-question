import colors from './style/colors.js'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`
export const Loader = styled.div`
    padding: 10px;
    border: 2px solid ${colors.primary};
    border-radius: 22px;
    border-bottom: transparent;
    animation: ${rotate} 1s infinite linear;
    
`