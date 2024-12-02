import React from 'react';
import Portal from './Portal';
import Gallery from './Gallery';
import '../../scss/components/Home/_home.scss';

export default function Home() {
  return (
    <div className="home">
      <Portal />
      <Gallery />
    </div>
  );
}
