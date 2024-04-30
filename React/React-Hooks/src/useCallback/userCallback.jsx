export const UseCallBackFn = () => {
    const handleSubmit = useCallback((details) => {
        // function definition
    }, [])
    return (
        <>
            <h1> Use Callback function </h1>
            <h4>useCallback is a React Hook that lets you cache a function definition between re-renders.</h4>
        </>
    )
}