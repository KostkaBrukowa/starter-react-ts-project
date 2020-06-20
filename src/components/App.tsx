import React from 'react';
import { Layout } from 'antd';
import { HelloWorld } from './hello-world/HelloWorld';

function App() {
  return (
    <Layout>
      <HelloWorld what="Wosld" />
    </Layout>
  );
}

export default App;
