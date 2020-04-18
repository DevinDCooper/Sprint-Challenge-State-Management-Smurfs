import axios from 'axios';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_ADDING = "START_ADDING";
export const SMURFS_ADDED = 'SMURFS_ADDED';
export const SMURFS_FAIL = 'SMURFS_FAIL';




export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: START_FETCHING });
    axios
    .get('http://localhost:3333/smurfs')
    .then((res) => 
    dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
    })
    
    )
    .catch((err) => dispatch({
        type: FETCH_FAILURE,
        payload: err.response
    })
    );
}



export const addSmurfs = (smurf) => (dispatch) => {
    dispatch({type: START_ADDING})
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
        dispatch({
            type: SMURFS_ADDED,
            payload: res.data
        });
    })
    .catch((error) => {
        dispatch({ 
            type: SMURFS_FAIL,
            payload: error.response
        })
    })
};
