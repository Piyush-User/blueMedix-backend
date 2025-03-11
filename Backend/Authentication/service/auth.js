const sessionIdToUserMap = new Map()

function setUser(id, user){
    sessionIdToUserMap.set(id, user)
}

function getUser(id){
    return sessionIdToUserMap.get(id)
}

async function hasUser(id){
    console.log(sessionIdToUserMap.has(id));   
}

async function printAll(id, user){
    sessionIdToUserMap.forEach((id, user) => {
        console.log(`${id}: ${user}`)
    })
}

module.exports = {
    setUser,
    getUser,
    hasUser,
    printAll,
}