import { Route, Routes } from 'react-router-dom'

import { BackToTop } from './components/back-to-top'
import { Sidebar } from './components/sidebar/sidebar'
import { APP_LINK_URLS, AppPage } from './constants/link-urls'
import { CharacterDetails } from './pages/character-details'
import { Characters } from './pages/characters'
import { Spells } from './pages/spells'
import styles from './App.module.css'

const App = () => (
  <div className={styles.layout}>
    <Sidebar className={styles.sidebar} />

    <main className={styles.content}>
      <Routes>
        <Route path={APP_LINK_URLS[AppPage.ROOT]} element={<Characters />} />
        <Route path={APP_LINK_URLS[AppPage.SPELLS]} element={<Spells />} />
        <Route path={APP_LINK_URLS[AppPage.CHARACTERS]} element={<Characters />} />
        <Route path={`${APP_LINK_URLS[AppPage.CHARACTERS]}/:id`} element={<CharacterDetails />} />
      </Routes>
      <BackToTop />
    </main>
  </div>
);

export default App;
