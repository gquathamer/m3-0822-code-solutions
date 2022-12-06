import React from 'react';
import AppContext from '../lib/app-context';

const styles = {
  page: {
    minHeight: 'calc(100vh - 3.5rem)'
  }
};

export default function PageContainer({ children }) {
  return (
    <div className="bg-light">
      <div className="container" style={styles.page}>
        { children }
      </div>
    </div>
  );
}

PageContainer.contextType = AppContext;
