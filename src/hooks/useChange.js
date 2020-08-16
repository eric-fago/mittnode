import { useEffect, useRef } from 'react';

const useChange = (data, callback, dependencies) => {
	const dataRef = useRef(data);
	useEffect(() => {
		if (dataRef.current === data)
			return;

		dataRef.current = data;
		callback();
	}, [data, callback, dependencies]);
};

export default useChange;
