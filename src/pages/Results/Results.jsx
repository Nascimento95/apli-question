import { useContext } from 'react';
import { SurveyContext } from '../../utils/context/Context';
import { useTheme } from '../../utils/hooks/index';
import { 
    ResultsContainer, 
    ResultsTitle, 
    DescriptionWrapper, 
    JobTitle, 
    JobDescription, 
    LoaderWrapper  
} from './ResultsStyle';
import { useFetch } from '../../utils/hooks/index';
import { Loader, StyledLink } from '../../utils/Atoms';

export function formatFetchParams(answers) {
    const answerNumbers = Object.keys(answers)
    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}
export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}

function Results() {
        const { theme } = useTheme()
        console.log(theme)
        const { answers } = useContext(SurveyContext)
        const fetchParams = formatFetchParams(answers)
        console.log(fetchParams)
        const { data, isLoading, error } = useFetch(
            `http://localhost:8000/results?${fetchParams}`
        )
            console.log("mes data result",data)
        if (error) {
            return <span>Il y a un problème</span>
        }
        const resultsData = data?.resultsData
    

        return isLoading ? (
            <LoaderWrapper>
                <Loader />
            </LoaderWrapper>
        ) : (
            <ResultsContainer >
                <ResultsTitle theme={theme}>
                    Les compétences dont vous avez besoin :
                    {resultsData &&
                        resultsData.map((result, index) => (
                            <JobTitle
                                key={`result-title-${index}-${result.title}`}
                                theme={theme}
                            >
                                {formatJobList(result.title, resultsData.length, index)}
                            </JobTitle>

                    ))}
                </ResultsTitle>
                <StyledLink $isFullLink to="/freelances">
                Découvrez nos profils
                </StyledLink>
                <DescriptionWrapper>
                    {resultsData &&
                        resultsData.map((result, index) => (
                        <JobDescription
                        theme={theme}
                        key={`result-detail-${index}-${result.title}`}
                        >
                        <JobTitle theme={theme}>{result.title}</JobTitle>
                        <p>{result.description}</p>
                        </JobDescription>
                    ))
                    }
                </DescriptionWrapper>
            </ResultsContainer>
    )
}

export default Results
