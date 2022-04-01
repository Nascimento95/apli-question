import { ContainerHome, ContainerTitle, ContainerCard, MainCard, MainCardContent, MainCard1 } from './Home-style';
import BarBig from '../../assets/CardLogo/BarBig.png'
import BarLittle from '../../assets/CardLogo/BarLittle.png'
import BarColorlittle from '../../assets/CardLogo/Vector (13).png'
import BarColorBig from '../../assets/CardLogo/Vector (12).png'
import Round from '../../assets/CardLogo/Vector (1).png'
import BodyLogo from '../../assets/CardLogo/Vector (8).png'
import headLogo from '../../assets/CardLogo/Vector (14).png'
import CordeEcouteur from '../../assets/CardLogo/Vector (11).png'
import Oeil from '../../assets/CardLogo/Vector (9).png' 
import Nose from '../../assets/CardLogo/Vector (10).png'
import Hair from '../../assets/CardLogo/Vector (4).png'
import Arceau from '../../assets/CardLogo/Vector (5).png'
import LeftHead from '../../assets/CardLogo/Vector (7).png'

function Home() {
    return (
        <ContainerHome>
            <ContainerTitle>
                <h2>Repérez vos besoins,<br/> on s’occupe du reste,<br/> avec les meilleurs <br/> talents</h2>
            </ContainerTitle>
            <ContainerCard>
                <MainCard>
                    <MainCardContent>
                        <div className="header-main-card">
                            <div className="user-logo">
                                <div className="back">
                                    <img className='head-logo' src={headLogo} alt="head-logo" />
                                    <img className='body-logo' src={BodyLogo} alt="body-logo" />
                                    <img className='corde' src={CordeEcouteur} alt="corde-ecouteur" />
                                    <img className='left' src={Oeil} alt="oeil" />
                                    <img className='right' src={Oeil} alt="oeil" />
                                    <img className='nose' src={Nose} alt="ose" />
                                    <img className='hair' src={Hair} alt="hair" />
                                    <img className='arceau' src={Arceau} alt="arceau" />
                                    <img className='left-head' src={LeftHead} alt="écouteur" />
                                    <img className='right-head' src={LeftHead} alt="écouteur" />
                                </div>
                            </div>
                            <div className="bar-color-icon">
                                <img className='bar-color-little' src={BarColorlittle} alt="icon" />
                                <img src={BarColorBig} alt="icon" />
                            </div>
                        </div>
                        <div className='container-round-and-bar'>
                            <div className='container-round'>
                                <img src={Round} alt="icon" />
                            </div>
                            <div className='container-bar-icon'>
                                <img src={BarBig} alt="icon" />
                                <img src={BarLittle} alt="icon" />
                            </div>
                        </div>
                        <div className='container-round-and-bar1'>
                            <div className='container-round'>
                                <img src={Round} alt="icon" />
                            </div>
                            <div className='container-bar-icon'>
                                <img src={BarBig} alt="icon" />
                                <img src={BarLittle} alt="icon" />
                            </div>
                        </div>
                        <div className='container-round-and-bar1'>
                            <div className='container-round'>
                                <img src={Round} alt="icon" />
                            </div>
                            <div className='container-bar-icon'>
                                <img src={BarBig} alt="icon" />
                                <img src={BarLittle} alt="icon" />
                            </div>
                        </div>
                    </MainCardContent>
                </MainCard>
                <MainCard1>
                    <div className="header-main-card">
                        <div className="user-logo">
                            <div className="back">
                                
                            </div>
                        </div>
                        <div className="bar-color-icon2">
                            <img className='bar-color-little' src={BarBig} alt="icon" />
                            <img src={BarLittle} alt="icon" />
                        </div>
                    </div>
                </MainCard1>
            </ContainerCard>
        </ContainerHome>
    )
}

export default Home
