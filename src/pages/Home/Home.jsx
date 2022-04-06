import { ContainerHome, ContainerTitle, ContainerCard} from './Home-style';
import CardHome from '../../assets/CardLogo/cardHome.svg'
import Buttons from '../../components/Button/Buttons';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/Context';

export const sum = (a, b) => {
    return a + b
}
function Home() {
    const {theme} = useContext(ThemeContext)
    return (
        <ContainerHome theme={theme}>
            <ContainerTitle>
                <h2>Repérez vos besoins,<br/> on s’occupe du reste,<br/> avec les meilleurs <br/> talents</h2>
            <Buttons text="Faire le test" />
            </ContainerTitle>
            <ContainerCard>
                <img src={CardHome} alt="" />
            </ContainerCard>
        </ContainerHome>
    )
}

export default Home
