import React from 'react';
import Grid from './Grid';
import './Main.scss';
import Shopping from './Shopping';
import Visual from './Visual';

function Main(props: any) {
    return (
        <main className="main">
            <Visual />
            <Grid />
            <Shopping />
        </main>
    );
}

export default Main;