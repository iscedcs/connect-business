'use client';
import ClientTable from '@/components/clients/client-table';
import Header from '@/components/dashboard/header';
import SearchBar from '@/components/dashboard/search-bar';
import { ALL_CLIENTS } from '@/utils/data';
import React, { ChangeEvent, Fragment } from 'react';

export default function Clients() {
	const [searchQuery, setSearchQuery] = React.useState<string>('');
	const [searchResults, setSearchResults] =
		React.useState<Client[]>(ALL_CLIENTS);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value.toLowerCase();
		setSearchQuery(query);

		const filteredResults = ALL_CLIENTS.filter(
			(client) =>
				client.fullName.toLowerCase().includes(query) ||
				client.email.toLowerCase().includes(query)
		);
		setSearchResults(filteredResults);
	};
	return (
		<Fragment>
			<Header
				profileImage='/img/avatar.jpeg'
				headerTitle='Clients'
				profileName='Da Civic'
				notificationCount={2}
			/>
			<SearchBar onChange={handleSearch} />
			<ClientTable selectedClients={searchResults} />
		</Fragment>
	);
}
