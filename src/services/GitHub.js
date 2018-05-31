import axios from 'axios'

export default class GitHub {
	getRepos (username) {
		return axios.get(`https://api.github.com/users/${username}/repos`)
	}
	
}

export const gitHub = new GitHub()