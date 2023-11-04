import Tables from '../../views/Tables/Tables'

const Home = () => {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h1>All posts</h1>
            </div>
            <div>
                <Tables />
            </div>
        </>
    );
};

export default Home;