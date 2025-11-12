import axios from 'axios';

export type Character = {
  id: string;
  name: string;
  house: string;
  image: string;
  dateOfBirth?: string | null;
  actor?: string | null;
};

const CHARACTERS_LIST_ENDPOINT = '/characters';
const CHARACTER_DETAILS_ENDPOINT = '/character';
const API_BASE_URL = 'https://hp-api.onrender.com/api';

const getCharacters = async (): Promise<Character[]> => {
  const { data } = await axios.get<Character[]>(`${API_BASE_URL}${CHARACTERS_LIST_ENDPOINT}`);

  return data;
};

const getCharacterById = async (id: string): Promise<Character | null> => {
  const { data } = await axios.get<Character[]>(`${API_BASE_URL}${CHARACTER_DETAILS_ENDPOINT}/${id}`);

  return data[0] ?? null;
};

export { getCharacters, getCharacterById };

