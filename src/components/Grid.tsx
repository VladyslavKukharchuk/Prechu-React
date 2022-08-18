import React from 'react';
import Box from './Box';
import './Grid.scss';

function Grid(props: any) {
    return (
        <section className="grid container">
                <Box img="pen-icon" color="blue"/>
                <Box img="pc-icon" color="red"/>
                <Box img="box-icon" color="yellow"/>
        </section>
    );
}

export default Grid;