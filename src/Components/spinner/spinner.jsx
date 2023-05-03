const spinner = ({isLoading,children}) => {
    if(isLoading){
        return 'loading.........'
    }
    return ({children});
};

export default spinner;