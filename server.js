const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function start server(){
    try{
        await MongoDB.connect(config.db.uri);
        console.log("Connect to the database!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
});
    }catch (error) {
    console.log("Can not connect to the database!", error);
    }
}

startServer();   
