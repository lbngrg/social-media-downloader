import toast from 'react-hot-toast';

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;

export async function fetchMediaInfo(url: string) {
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ url })
  };

  try {
    const response = await fetch(`https://${API_HOST}/v1/social/autolink`, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data || data.error) {
      throw new Error('Invalid response from API');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    toast.error('Failed to fetch video information. Please check the URL and try again.');
    throw error;
  }
}