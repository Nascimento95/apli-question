import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/GoArt_Blue Blooming_oeuz.jpg'
import { CardLabel, CardImage, CardWrapper } from './Card-Style.jsx';


function Card({label, title, picture}) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <span>{title}</span>
        </CardWrapper>
    )
}
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}
Card.defaultProps = {
    label:'',
    title: '',
    picture: DefaultPicture

}

export default Card
