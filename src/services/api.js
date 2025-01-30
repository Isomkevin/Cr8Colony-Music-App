// src/services/api.js
const API_BASE_URL = 'http://localhost:5000/api';

export const fetchNavigation = () => fetch(`${API_BASE_URL}/navigation`).then(res => res.json());
export const fetchHero1 = () => fetch(`${API_BASE_URL}/hero1`).then(res => res.json());
export const fetchHero2 = () => fetch(`${API_BASE_URL}/hero2`).then(res => res.json());
export const fetchTrending = () => fetch(`${API_BASE_URL}/trending`).then(res => res.json());
export const fetchNews = () => fetch(`${API_BASE_URL}/news`).then(res => res.json());
export const fetchRecommended = () => fetch(`${API_BASE_URL}/recommended`).then(res => res.json());
export const fetchBrowse = () => fetch(`${API_BASE_URL}/browse`).then(res => res.json());

export const sendSMS = async (to, message) => {
    try {
        const response = await fetch(`${API_BASE_URL}/sms?to=${encodeURIComponent(to)}&message=${encodeURIComponent(message)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to send SMS');
        }

        return data;
    } catch (error) {
        console.error('Error sending SMS:', error);
        throw error;
    }
};
