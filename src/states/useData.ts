import { useState } from 'react';

function createData(time: string, value: number) {
    return { time, value };
}

function dateTimeNow(): string {
    let date = new Date();
    let hours = `${date.getHours()}`;
    let minutes = `${date.getMinutes()}`;
    let seconds = `${date.getSeconds()}`;

    hours = hours.length === 1 ? `0${hours}` : hours;
    minutes = minutes.length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.length === 1 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

const initialData = [
    createData(dateTimeNow(), 60),
    createData(dateTimeNow(), 61),
    createData(dateTimeNow(), 62),
    createData(dateTimeNow(), 61),
    createData(dateTimeNow(), 65),
    createData(dateTimeNow(), 66),
    createData(dateTimeNow(), 68),
    createData(dateTimeNow(), 69),
    createData(dateTimeNow(), 62),
    createData(dateTimeNow(), 64),
    createData(dateTimeNow(), 66),
    createData(dateTimeNow(), 70),
    createData(dateTimeNow(), 72),
    createData(dateTimeNow(), 74),
    createData(dateTimeNow(), 77),
    createData(dateTimeNow(), 75),
    createData(dateTimeNow(), 76),
    createData(dateTimeNow(), 80),
    createData(dateTimeNow(), 75),
    createData(dateTimeNow(), 82),
    createData(dateTimeNow(), 81),
];

export default function useData() {    
    const [data, setData] = useState(initialData);

    function saveData(value: number) {
        setData([...data.slice(Math.max(data.length - 40, 0)), createData(dateTimeNow(), value)]);
    }

    return {
        setData: saveData,
        data
    }
}