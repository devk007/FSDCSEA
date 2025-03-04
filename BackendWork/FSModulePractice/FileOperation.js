const promise = require('fs').promises

const dataRead = async () => {
    const data = await promise.readFile('studentData.json', "utf-8")
    await promise.writeFile('updatedStudentData.json', data)
}
dataRead()
module.exports = dataRead