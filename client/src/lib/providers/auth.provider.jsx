import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../context/AuthContext';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(currentUser => {
			if (currentUser) {
				console.log(currentUser);
				setCurrentUser(currentUser);
			} else {
				console.log('no user');
				setCurrentUser(null);
			}
		});
		return () => unsuscribe();
	}, []); //vigilante en use effect, que revisa si el ususario ha iniciado sesisión o se va.

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
