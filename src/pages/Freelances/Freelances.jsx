import DefaultPicture from '../../assets/GoArt_Blue Blooming_oeuz.jpg'
import Card from '../../components/Card/Card';
import { CardsContainer } from './Freelance-style';

function Freelances() {
    
    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
    ]
    
    return (
        <div>
            <h1>Freelance</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => 
                    <Card 
                        key={`${index}-${profile.name}`}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                )}
            </CardsContainer>
        </div>
    )
}

export default Freelances
