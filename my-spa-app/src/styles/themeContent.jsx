import { createContext } from 'react';

export const ThemeContext = createContext();


export const theme = {
	light: {
		body: '#fff',
		text: '#222',
		cardBg: '#f9f9f9',
		headerBg: '#e3e3e3',
		headerText: '#222',
		buttonBg: '#007bff',
		buttonText: '#fff',
		buttonBorder: '#007bff',
		buttonHoverBg: '#0056b3',
	},
	dark: {
		body: '#222',
		text: '#fff',
		cardBg: '#333',
		headerBg: '#111',
		headerText: '#fff',
		buttonBg: '#4444ff',
		buttonText: '#fff',
		buttonBorder: '#4444ff',
		buttonHoverBg: '#2222aa',
	},
};
