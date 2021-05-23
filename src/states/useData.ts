import { useState } from 'react';

function createData(time: string, value: number) {
    return { time, value };
}

function dateTimeNow(): string {
    let date = new Date();

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const initialData = [
    createData(dateTimeNow(), 60),
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