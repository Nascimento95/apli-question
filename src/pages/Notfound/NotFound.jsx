import { Container } from './NotFoundStyle';
import ImgNotFound from '../../assets/Notfound-image/undraw_page_not_found_su7k 1.png'

function Notfound() {
    return (
        <Container>
            <h1>Oups ...</h1>
            <img src={ImgNotFound} alt="Notfound" />
            <p>Il semblerait qu'il y ait un problème</p>
        </Container>
    )
}

export default Notfound
