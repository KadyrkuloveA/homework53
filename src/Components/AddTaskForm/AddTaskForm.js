import React from 'react';
import { Button, Input, FormGroup, Form } from 'reactstrap';

function AddTaskForm (props) {
    return (
        <div className='createTask' inline>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" >
                    <Input type="text" value={props.value} onChange={props.change} placeholder="Add new task"/>
                    <Button outline color="success" className='ml-2' onClick={props.add}>➭</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddTaskForm;