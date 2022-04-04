const fetchQuestion = async (setQuestion, setDataLoading, setError) => {
        // setDataLoading(true)
        // fetch(`http://localhost:8000/survey`)
        //     .then((response) => response.json()
        //     .then(({ surveyData }) => {
        //         setQuestion(surveyData)
        //         setDataLoading(false)
        //     })
        //     .catch((error) => console.log(error))
        // )
    setDataLoading(true)    
    try {
        const response = await fetch(`http://localhost:8000/survey`)
        const {surveyData}  = await response.json()
        setQuestion(surveyData)
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setDataLoading(false)
    }

}
export default fetchQuestion