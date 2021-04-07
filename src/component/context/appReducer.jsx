
import axios from 'axios';

export default function appReducer(state, action) {
	switch (action.type) {
		case "ADD_EVENT":
			return {
				...state,
				events: [...state.events, action.payload],
			};

		case "GET_ALL_EMPLOYEE":

			return axios.get('http://localhost:3000/api/event')
				.then(function (response) {
					console.log(response);
					// handle success
					return response.data.data.data;
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})


		default:
			return state;
	}
};