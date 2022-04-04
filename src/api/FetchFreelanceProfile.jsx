const profileFreelance = async (setFreelanceProfiles, setDataLoadingFreelance, setErrorData) => {
    setDataLoadingFreelance(true)
    try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const {freelancersList} = await response.json()
        setFreelanceProfiles(freelancersList)
    } catch (err) {
        console.log(err)
        setErrorData(true)
    } finally {
        setDataLoadingFreelance(false)
    }

}

export default profileFreelance
