import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import styles from './CardTable.module.scss';
import { NavLink } from 'react-router-dom';

const CardTable = ({ id, status }) => {
    return (
        <Row className={styles.row} key={id}>
            <Col sm={1}><h4>Table {id}</h4></Col>
            <Col className='my-auto py-0' sm={7}><p className='my-auto  pb-0'><b>status:</b> {status}</p></Col>
            <Col className={styles.bottom} sm={4}><Button as={NavLink} to={`/table/${id}`} variant="primary">Show more</Button></Col>
        </Row>
    );
};

export default CardTable;