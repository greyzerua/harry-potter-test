import { useEffect, useState } from 'react';

import { getSpells } from '../../api/spells';
import type { Spell } from '../../api/spells';

import styles from './spells.module.css';

const Spells = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        setIsLoading(true);
        const data = await getSpells();
        setSpells(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred while loading spells.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpells();
  }, []);

  const hasSpells = spells.length > 0;

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Spells</h1>

      {isLoading && <p className={styles.state}>Loading spells...</p>}

      {error && !isLoading && <p className={styles.state}>Failed to load spells. {error}</p>}

      {!isLoading && !error && !hasSpells && <p className={styles.state}>No spells found.</p>}

      {!isLoading && !error && hasSpells && (
        <ul className={styles.list}>
          {spells.map((spell) => (
            <li key={spell.name} className={styles.item}>
              <h2 className={styles.name}>{spell.name}</h2>
              <p className={styles.description}>{spell.description || 'No description provided.'}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export { Spells };
