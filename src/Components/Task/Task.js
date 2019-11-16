import React from 'react';
import { Card, Button, CardText } from 'reactstrap';

function Task (props) {
    return (
        <Card body className='mt-3 mb-2'>
            <CardText>{props.text}</CardText>
            <Button size="sm" className='ml-auto' onClick={props.del}>✘</Button>
        </Card>
    )
}

export default Task;
