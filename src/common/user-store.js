import moment from 'moment'
class User {
	set(data) {
		data.TokenExpiry = moment().add(10, 'hours').toDate(); // TODO: match the utc expiry
		var user = JSON.stringify(data);
		window.localStorage.setItem("user", user);
	}

	get(prop) {
		let user = window.localStorage.getItem("user");
		if (user !== null)
			return JSON.parse(user)[prop];
		else
			return null;
	}

	let(key, value) {
		var user = window.localStorage.getItem('user');
		if (user !== null) {
			var store = JSON.parse(user);
			store[key] = value;
			window.localStorage.setItem('user', JSON.stringify(store));
		}
	}

	loggedin() {
		if (this.get('TokenExpiry') == null) {
			return false;
		} else {
			if (moment().toDate() > moment(this.get('TokenExpiry')).toDate()) {
				window.localStorage.clear();
				return false;
			}
		}
		return true;
	}

	logout() {
		window.localStorage.clear();
		window.location.href = '/login';
	}
}

let userStore = window.userStore = new User;
export default userStore;