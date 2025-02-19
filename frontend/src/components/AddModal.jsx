import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const AddModal = ({ show, handleClose }) => {
    const [newGame, setNewGame] = React.useState({
        title: '',
        genre: '',
        platform: '',
        release_year: '',
        description: '',
        image: ''
    });

    const handleAddGame = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/games`, newGame);
            handleClose();  // Close modal after successful request
        } catch (error) {
            console.error("Error adding game:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} data-bs-theme="dark">
            <Modal.Header closeButton>
                <Modal.Title className="text-white">Add Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddGame}>
                    <div className="row">
                        <Form.Group className="mb-3 col-6">
                            <Form.Label className="text-white">Title</Form.Label>
                            <Form.Control type="text" placeholder="Title"
                                value={newGame.title}
                                onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6">
                            <Form.Label className="text-white">Genre</Form.Label>
                            <Form.Control type="text" placeholder="Genre"
                                value={newGame.genre}
                                onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
                                required />
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3 col-6">
                            <Form.Label className="text-white">Platform</Form.Label>
                            <Form.Select aria-label="Platform" value={newGame.platform}
                                onChange={(e) => setNewGame({ ...newGame, platform: e.target.value })}
                                required>
                                <option value="">Platform</option>
                                <option>Playstation</option>
                                <option>XBOX</option>
                                <option>Computer</option>
                                <option>Mobile</option>
                                <option>Nintendo Switch</option>
                                <option>Virtual Reality</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-6">
                            <Form.Label className="text-white">Release Date</Form.Label>
                            <Form.Control type="date"
                                value={newGame.release_year}
                                onChange={(e) => setNewGame({ ...newGame, release_year: e.target.value })}
                                required />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white">Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Description"
                            value={newGame.description}
                            onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white">Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Image"
                            value={newGame.image}
                            onChange={(e) => setNewGame({ ...newGame, image: e.target.value })}
                            required />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddModal;
