'use client';
import ClientTable from '@/components/clients/client-table';
import Header from '@/components/dashboard/header';
import SearchBar from '@/components/dashboard/search-bar';
import { COMPANY_PROFILE } from '@/utils/data';
import React, { ChangeEvent, Fragment } from 'react';

export default function Clients() {
	const [searchQuery, setSearchQuery] = React.useState<string>('');
	const [searchResults, setSearchResults] = React.useState<Client[]>(
		COMPANY_PROFILE.clients
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value.toLowerCase();
		setSearchQuery(query);

		const filteredResults = COMPANY_PROFILE.clients.filter(
			(client) =>
				client.fullName.toLowerCase().includes(query) ||
				client.email.toLowerCase().includes(query)
		);
		setSearchResults(filteredResults);
	};
	return (
		<Fragment>
			<Header />
			<SearchBar onChange={handleSearch} />
			<ClientTable selectedClients={searchResults} />
		</Fragment>
	);
}
