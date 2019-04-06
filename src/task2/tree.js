const jsonTree = function(jsonObj, pid){
    const resObj = []
    jsonObj.forEach(curr => {
        if (curr.pid === pid) {
            resObj.push({
                name: curr.name,
                pid: curr.pid || 0,
                key: curr.key,
                children: jsonTree(jsonObj, curr.key)
            })
        }
    })
    return resObj
}

export default jsonTree