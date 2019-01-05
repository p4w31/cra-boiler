import axios from 'axios';

export function fetchJSON(newState) {
    return function(dispatch, getState) {
        return new Promise((resolve, reject) => {
            dispatch({
                type: 'asdf1111'
            });
            axios.get('http://localhost:3004/advertisers')
                .then((response) => {
                    console.log('response');
                    console.log(response.data);
                    //resolve(response.data);
                    dispatch({
                        type: 'asdf2222',
                        payload: response.data
                    });
                })
                .catch((err) => {
                    console.log(err);
                });

        })
    }
}