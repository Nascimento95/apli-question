import { useParams, Link } from 'react-router-dom';

function Survey() {
    const {questionId} = useParams()
    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionId}</h2>
            <ul>
                {questionId <=1 ? <Link to={`/survey/${questionId}`}>précédent</Link> : <Link to={`/survey/${Number(questionId) - 1}`}>précédent</Link>}
                {questionId >= 10 ? <Link to={`/results`}>Résultas</Link> : <Link to={`/survey/${Number(questionId) + 1}`}>suivant</Link>} 
            </ul>
        </div>
    )
}

export default Survey
