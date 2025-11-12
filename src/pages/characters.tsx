import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCharacters } from 'src/api/characters';
import type { Character } from 'src/api/characters';

import styles from './characters.module.css';

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred while loading characters.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Characters</h1>

      {isLoading && <p className={styles.state}>Loading characters...</p>}

      {error && !isLoading && <p className={styles.state}>Failed to load characters. {error}</p>}

      {!isLoading && !error && (
        <div className={styles.grid}>
          {characters.map((character) => (
            <Link
              to={`/characters/${character.id}`}
              key={character.id}
              className={styles.card}
            >
              {character.image ? (
                <img src={character.image} alt={character.name} className={styles.image} loading="lazy" />
              ) : (
                <div className={styles.placeholder} aria-hidden>
                  No image
                </div>
              )}
              <div className={styles.info}>
                <h2 className={styles.name}>{character.name}</h2>
                <p className={styles.house}>{character.house || 'Unknown house'}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export { Characters };

