import React from 'react';
// import logo from './logo.svg';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <main className={styles.mainWrapper}>
      <Sidebar />
      <div className={styles.app}>Notebook app</div>
    </main>
  );
};

export default App;
