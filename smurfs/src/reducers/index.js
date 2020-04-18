import{ 
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    START_ADDING,
    SMURFS_ADDED,
    SMURFS_FAIL
}from "../actions";


const initialState = {
    Smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
            case FETCH_SUCCESS:
                return{
                    ...state,
                    isFetching: false,
                    error: '',
                    Smurfs: action.payload
                };
                case FETCH_FAILURE:
                    return {
                        ...state,
                        isFetching: false,
                        error: action.payload
                    };
                    case START_ADDING:
                        return {
                            ...state,
                            isFetching: true,
                            error: ''

                        }
                        case SMURFS_ADDED:
                            return {
                                ...state,
                                isFetching: false,
                                error: '',
                                Smurfs: action.payload
                            };
                            case SMURFS_FAIL:
                                return {
                                    ...state,
                                    isFetching: false,
                                    error: action.payload
                                }
                    default:
                        return state;
                }
                
                    
}


export default reducer;