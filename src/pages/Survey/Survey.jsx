import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LinkWrapper, QuestionContent, QuestionTitle, SurveyContainer } from './SurveyStyle';
import fetchQuestion from '../../api/FetchQuestion';
import { Loader } from '../../utils/Atoms';

function Survey() {
    const {questionId} = useParams()
    const [question, setQuestion] = useState({})
    const [dataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchQuestion(setQuestion, setDataLoading, setError)
    }, [])
    // console.log("mon state",question)
    return (
        <SurveyContainer>
            <QuestionTitle> Question {questionId}</QuestionTitle>
            <QuestionContent>{dataLoading ? <Loader/> : question[questionId]}</QuestionContent>
            {error && <p>Une erreur est survenue</p>}
            <LinkWrapper>
                {questionId <=1 ? <Link to={`/survey/${questionId}`}>précédent</Link> : <Link to={`/survey/${Number(questionId) - 1}`}>précédent</Link>}
                {questionId >= 10 ? <Link to={`/results`}>Résultas</Link> : <Link to={`/survey/${Number(questionId) + 1}`}>suivant</Link>} 
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey
