import { Route, Routes } from 'react-router-dom';

import { Sidebar } from 'src/components/sidebar/sidebar';
import { APP_LINK_URLS, EAppPage } from 'src/constants/link-urls';
import { CharactersPage } from 'src/pages/characters-page';
import { SpellsPage } from 'src/pages/spells-page';

import styles from './App.module.css';

const App = () => (
  <div className={styles.layout}>
    <Sidebar className={styles.sidebar} />

    <main className={styles.content}>
      <Routes>
        <Route path={APP_LINK_URLS[EAppPage.ROOT]} element={<CharactersPage />} />
        <Route path={APP_LINK_URLS[EAppPage.SPELLS]} element={<SpellsPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
