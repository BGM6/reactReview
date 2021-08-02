import React, {Fragment, useState} from 'react';

const ListUsers = ({users}) => {
	const [term, setTerm] = useState('');

	// eslint-disable-next-line array-callback-return
	const renderUsers = users.filter(user => {
		if (term === '') {
			return user;
		} else if (user.name.toLowerCase().includes(term.toLowerCase())) {
			return user;
		}
	}).map(user => {
		return (
			<div key={user.id}>
				<h1>{user.name}</h1>
				<p>{user.email}</p>
			</div>
		);
	});

	const searchBarInput = (
		<div className="ui form" style={{marginTop: '2rem'}}>
			<div className="ui field">
				<input
					type="text"
					placeholder="Search names"
					value={term}
					onChange={e => setTerm(e.target.value)}
				/>
			</div>
		</div>
	);

	return (
		<Fragment>
			{searchBarInput}
			{renderUsers}
		</Fragment>
	);
};

export default ListUsers;