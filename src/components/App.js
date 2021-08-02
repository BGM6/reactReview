import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListUsers from './ListUsers';

const App = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const runFetchData = async () => {
			await fetchData();
		};
		runFetchData().then(r => r);
	}, []);

	const fetchData = async () => {
		const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(data);
	};

	return (
		<div className="ui container">
			<ListUsers
				users={users}
			/>
		</div>
	);
};

export default App;


