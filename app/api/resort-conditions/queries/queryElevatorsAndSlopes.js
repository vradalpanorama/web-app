const conditions = (data) => {
    const obj = {};

    obj.open = data['open'];
    obj.total = data['count'];
    obj.list = data['list'].map((item, index) => {
        const objItem = {};
        objItem.isOpen = item['status'] === "1" ? true : false;
        if (item['slope_difficulty'] !== 'uknown') {
            const nameArray = item['name'].split(' ');

            objItem.trackLevel = item['slope_difficulty']
            objItem.label = nameArray[0]
            objItem.name = nameArray[1]


        } else {
            objItem.label = String.fromCharCode(index + 97) // UTF-16 
            objItem.name = item['name'];
        }
        return objItem;
    })

    return obj;
};


const queryElevatorsAndSlopes = ({elevatorsData, slopesData}) => {
    const elevators = conditions(elevatorsData);
    const slopes = conditions(slopesData);

    const response = {
        elevators,
        slopes
    }

    return response;
};

export default queryElevatorsAndSlopes ;
