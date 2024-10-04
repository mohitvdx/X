import { initServer } from "./app";

async function init(){
    const app = await initServer();
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}

init();