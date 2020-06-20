import React from 'react';
import styles from './HelloWorld.module.css';
import { Button } from 'antd';

export interface HelloWorldProps {
  what: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ what }) => {
  return (
    <header className={styles.header}>
      <Button>Click button with andD</Button>
      <p>Hello {what}!</p>
    </header>
  );
};
