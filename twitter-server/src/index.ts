import { initServer } from "./app";

async function init(){
    const app = await initServer();
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}

init();