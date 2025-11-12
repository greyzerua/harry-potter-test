import axios from 'axios';

export type Spell = {
  name: string;
  description: string;
};

const API_BASE_URL = 'https://hp-api.onrender.com/api';
const SPELLS_ENDPOINT = '/spells';

const getSpells = async (): Promise<Spell[]> => {
  const { data } = await axios.get<Spell[]>(`${API_BASE_URL}${SPELLS_ENDPOINT}`);

  return data;
};

export { getSpells };


