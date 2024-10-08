import JWT from "jsonwebtoken";
import { prismaClient } from "../clients/db";

class JWTService {
    public static async generateTokenForUser(userId: string){
        const user = await prismaClient.user.findUnique({
            where: {
                id: userId
            }
        });
        const payload = {
            id: user?.id,
            email: user?.email,
        };

        const token = JWT.sign(payload, process.env.JWT_SECRET as string);
        return token;
    }
}

export default JWTService;