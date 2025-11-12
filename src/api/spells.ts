import axios from 'axios';

import { API_BASE_URL } from './config';

export type Spell = {
  name: string;
  description: string;
};

const SPELLS_ENDPOINT = '/spells';

const getSpells = async (): Promise<Spell[]> => {
  const { data } = await axios.get<Spell[]>(`${API_BASE_URL}${SPELLS_ENDPOINT}`);

  return data;
};

export { getSpells };


