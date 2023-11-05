import { Row } from "react-bootstrap";
import styles from './Tables.module.scss';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import CardTable from "../CardTable/CardTable";

const Tables = () => {
    const tables = useSelector(getAllTables);

    return (
        <Row className={styles.row}>
            {tables.map((table, index) => (
                <CardTable
                    key={index}
                    id={table.id}
                    status={table.status}
                />
            ))}
        </Row >
    );
};

export default Tables;