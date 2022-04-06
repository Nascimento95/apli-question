import { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LinkWrapper, QuestionContent, QuestionTitle, SurveyContainer, YesButton } from './SurveyStyle';
import { Loader } from '../../utils/Atoms';
import { SurveyContext } from '../../utils/context/Context';
import { useFetch } from '../../utils/hooks';


function Survey() {
    const {questionId} = useParams()
    const navigate = useNavigate()
    // const [question, setQuestion] = useState({})
    // const [dataLoading, setDataLoading] = useState(false)
    // const [error, setError] = useState(null)
    const { saveAnswers } = useContext(SurveyContext)
    const [validateResponseBooleen, setValidateResponseBooleen] = useState(false)

    const {data, isLoading, error} = useFetch(`http://localhost:8000/survey`)
    const {surveyData} = data
    // console.log(surveyData)
    // console.log(isLoading)
    
    const saveResponse = (answer) => {
        saveAnswers({[questionId]: answer})
        setValidateResponseBooleen(true)
        setTimeout(() => {
            setValidateResponseBooleen(false)
            navigate(`/survey/${Number(questionId) + 1}`)
        }, 1000);
    }

    // useEffect(() => {
    //     fetchQuestion(setQuestion, setDataLoading, setError)
    // }, [])
    if (error) {
        return <span>Il y a un problème</span>
    }

    return (
        <SurveyContainer>
            <QuestionTitle> Question {questionId}</QuestionTitle>
            <QuestionContent>
                {isLoading ? <Loader/> : surveyData[questionId]}
            </QuestionContent>
                <div className='yes-or-no'>
                    <YesButton onClick={() => saveResponse(true)}>oui</YesButton>
                    <YesButton 
                        onClick={() => saveResponse(false)}
                        className='no'
                    >non</YesButton>
                </div>
            {validateResponseBooleen && <p>Réponse valider</p>}
            {/* {error && <p>Une erreur est survenue</p>} */}
            <LinkWrapper>
                {questionId <=1 ? <Link to={`/survey/${questionId}`}>précédent</Link> : <Link to={`/survey/${Number(questionId) - 1}`}>précédent</Link>}
                {questionId >= 10 ? <Link to={`/results`}>Résultas</Link> : <Link to={`/survey/${Number(questionId) + 1}`}>suivant</Link>} 
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey
