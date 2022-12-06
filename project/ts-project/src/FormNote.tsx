import React from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'

const FormNote = () => {
  return (
    <div>
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group controlId='tag'>
                        <Form.Label>Tag</Form.Label>
                        <CreatableReactSelect isMulti />
                    </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='markdown'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control required as="textarea" rows={15}/>
                    </Form.Group>
                    <Stack direction='horizontal' gap={3} className="justify-end" >
                       <Button type='submit' variant='primary'>Save</Button>
                       <Link to="..">
                       <Button type='button' variant='outline-secondary' >Cancel</Button>

                       </Link>
                    </Stack>
            </Stack>
        </Form>
    </div>
  )
}

export default FormNote