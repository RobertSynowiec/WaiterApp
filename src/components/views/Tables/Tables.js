import { Row } from "react-bootstrap";
import styles from './Tables.module.scss';
import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import CardTable from "../CardTable/CardTable";

const Tables = () => {
    const tables = useSelector(getAllTables);
    console.log(tables)

    return (
        <Row className={styles.row}>
            {tables.map(table => (
                <CardTable
                    id={table.id}
                    status={table.status}
                />
            ))}
        </Row >
    );
};

export default Tables;