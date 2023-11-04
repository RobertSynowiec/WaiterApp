const initialState = {

    tables: [
        {
            id: "1",
            status: "Busy",
            peopleAmount: "6",
            maxPeopleAmount: "4",
            bill: "100"
        },
        {
            id: "2",
            status: "Free",
            peopleAmount: "1",
            maxPeopleAmount: "3",
            bill: "0"
        },
        {
            id: "3",
            status: "Free",
            peopleAmount: "0",
            maxPeopleAmount: "2",
            bill: "0"
        },
        {
            id: "4",
            status: "Free",
            peopleAmount: "0",
            maxPeopleAmount: "2",
            bill: "0"
        }
    ],
    status: [
        {
            name: 'Free',
        },
        {
            name: 'Busy',
        },
        {
            name: 'Reserved',
        },
        {
            name: 'Cleaning',
        }
    ]
}
export default initialState;