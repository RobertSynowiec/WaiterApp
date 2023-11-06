import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getTableById, editTablesRequest } from '../../../redux/tablesRedux';
import { getAllStatus } from '../../../redux/tableStatus';

const Table = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const singleTable = useSelector(state => getTableById(state, id));
    const dispatch = useDispatch();
    const allStatus = useSelector(getAllStatus);

    const initialStatus = singleTable && singleTable.status ? singleTable.status : '';
    const initialPeopleAmount = singleTable && singleTable.peopleAmount ? singleTable.peopleAmount : '';
    const initialMaxPeopleAmount = singleTable && singleTable.maxPeopleAmount ? singleTable.maxPeopleAmount : '';
    const initialBill = singleTable && singleTable.bill ? singleTable.bill : '';
    console.log('initialBill', initialBill)

    const [status, setStatus] = useState(initialStatus || '');
    const [peopleAmount, setPeopleAmount] = useState(initialPeopleAmount || '');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(initialMaxPeopleAmount || '');
    const [bill, setBill] = useState(initialBill || '');
    console.log('bill ', bill)
    const MinPeople = 0;
    const MaxPeople = 10;

    const updatedData = {
        status,
        peopleAmount,
        maxPeopleAmount,
        bill,
    };
    console.log('updatedData ', updatedData)

    const handleUpdate = e => {
        e.preventDefault();
        dispatch(editTablesRequest(id, updatedData));
        navigate('/')
    };

    useEffect(() => {
        if (status === 'Busy') {
            setBill('0');
        } else if (status === 'Cleaning' || status === 'Free') {
            setPeopleAmount('0');
        } else { }
        if (peopleAmount < MinPeople) {
            setPeopleAmount(MinPeople);
        } else if (peopleAmount > maxPeopleAmount) {
            setPeopleAmount(maxPeopleAmount);
        }
        if (maxPeopleAmount < MinPeople) {
            setMaxPeopleAmount(MinPeople);
        } else if (maxPeopleAmount > MaxPeople) {
            setMaxPeopleAmount(MaxPeople);
        }
    }, [status, peopleAmount, maxPeopleAmount]);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleInputValueChange = (e, inputNumber) => {
        if (inputNumber === 1) {
            setPeopleAmount(e.target.value);
        } else if (inputNumber === 2) {
            setMaxPeopleAmount(e.target.value);
        }
    };

    const handleBillChange = (e) => {
        setBill(e.target.value);
    };

    if (!singleTable || singleTable.length === 0) return <Navigate to="/" />;

    return (
        <Form className="w-100">
            <Form.Group style={{ marginBottom: '20px' }} as={Row} controlId="status">
                <Form.Label style={{ fontWeight: 'bolder', marginRight: '5px' }} column sm={1}>Status:</Form.Label>
                <Col style={{ padding: '0', margin: '5px' }} sm={2}>
                    <Form.Select value={status} onChange={handleStatusChange}>
                        {allStatus.map((singleStatus, index) => (
                            <option key={index} value={singleStatus.name}>
                                {singleStatus.name}
                            </option>
                        ))}
                    </Form.Select >
                </Col>
            </Form.Group>
            <Form.Group style={{ marginBottom: '20px' }} as={Row}>
                <Form.Label style={{ fontWeight: 'bolder' }} column sm={1}>People:</Form.Label>
                <Col sm={3}>
                    <div style={{ display: 'flex' }}>
                        <Form.Control
                            type="text"
                            value={peopleAmount}
                            onChange={(e) => handleInputValueChange(e, 1)}
                            style={{ marginRight: '5px' }}
                            id={'peopleAmount'}
                        />
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '5px' }}>/</span>
                        <Form.Control
                            type="text"
                            value={maxPeopleAmount}
                            onChange={(e) => handleInputValueChange(e, 2)}
                            style={{ marginLeft: '5px' }}
                            id={'maxPeopleAmount'}
                        />
                    </div>
                </Col>
            </Form.Group>

            <Form.Group style={{ marginBottom: '20px' }} as={Row} controlId="bill" hidden={status !== 'Busy'}>
                <Form.Label style={{ fontWeight: 'bolder' }} column sm={1}>Bill:</Form.Label>
                <Col sm={2}>
                    <div style={{ display: 'flex' }}>
                        <span style={{ margin: 'auto 5px auto 0' }}>$</span>
                        <div className="input-group">
                            <Form.Control
                                type="text"
                                value={bill}
                                onChange={handleBillChange}
                            />
                        </div>
                    </div>
                </Col>
            </Form.Group>

            <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Form>
    );
};

export default Table;
