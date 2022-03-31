import { useParams } from 'react-router-dom';

function Survey() {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>Questionnaire</h1>
        </div>
    )
}

export default Survey
