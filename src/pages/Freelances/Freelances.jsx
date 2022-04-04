// import DefaultPicture from '../../assets/GoArt_Blue Blooming_oeuz.jpg'
import Card from '../../components/Card/Card';
import { CardsContainer,Container, ErrorText } from './Freelance-style';
import { useState, useEffect } from 'react';
import profileFreelance from '../../api/FetchFreelanceProfile';
import { Loader } from '../../utils/Atoms';

function Freelances() {
    const [freelanceProfiles, setFreelanceProfiles] = useState([])
    const [dataLoadingFreelance, setDataLoadingFreelance] = useState(false)
    const [errorData, setErrorData] =useState(false)
    useEffect(() => {
        profileFreelance(setFreelanceProfiles, setDataLoadingFreelance, setErrorData)
    }, [])
    console.log("state", freelanceProfiles)
    if( errorData ) {
        return <ErrorText>Une erreur est survenue.</ErrorText>
    }
    
    return (
        <Container>
            <h1 className='title'>Trouvez votre prestataire</h1>
            <h2>Chez Shiny nous réunissons les meilleures profils pour vous.</h2>
                {dataLoadingFreelance ? 
                <div className='container-loading'>
                    <Loader/> 
                </div>
                : 
                <CardsContainer>
                    {freelanceProfiles.map((profile, index) => 
                        <Card 
                            key={`${index}-${profile.name}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    )}
                </CardsContainer>
                }
                
            
        </Container>
    )
}

export default Freelances
