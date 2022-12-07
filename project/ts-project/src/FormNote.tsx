import React, { FormEvent, useRef, useState } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'
import { NoteData, Tag } from './App'

//types

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}

const FormNote = ({onSubmit}: NoteFormProps) => {

 const titleRef = useRef<HTMLInputElement>(null)
 const markdowRef = useRef<HTMLTextAreaElement>(null)


 const [selectedTags, setSelectedTags] = useState<Tag[]>([])


 function handleSubmit(e: FormEvent) {
       e.preventDefault()

       onSubmit({
        title: titleRef.current!.value,
        markdown: markdowRef.current!.value,
        tags: [],
       })
 }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} required />
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group controlId='tag'>
                        <Form.Label>Tag</Form.Label>
                        <CreatableReactSelect value={selectedTags.map(tag => {
                            return { label: tag.label, value: tag.id}
                        })}
                        onChange={tags => {
                            setSelectedTags(tags.map(tag => {
                                return { label: tag.label, id: tag.value}
                            }))
                        }}
                        isMulti />
                    </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='markdown'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={markdowRef} required as="textarea" rows={15}/>
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