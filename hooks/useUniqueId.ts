import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export default function useUniqueId() {
	const [id, setId] = useState('');

	useEffect(() => {
		setId(uuid());
	}, []);

	return id;
}
