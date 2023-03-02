import { useState } from 'react';
import Button from './button.jsx';

export default function Dashboard({currentList, setList}) {
    return (
        <div className={'dashboard'}>
            <Button value={'Add TODO'} style={'btn'} onClick={setList} />
        </div>
    );
}
