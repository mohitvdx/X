import axios from 'axios';
import { prismaClient } from '../../clients/db';
import JWTService from '../../services/jwt';

interface GoogleTokenResult {
    iss: string; // Issuer
    azp: string; // Authorized party (client ID)
    aud: string; // Audience (client ID)
    sub: string; // Subject (user ID)
    email: string; // Email of the user
    email_verified: string; // Email verification status
    nbf: string; // Not before timestamp
    name: string; // Full name of the user
    picture: string; // Profile picture URL
    given_name: string; // First name of the user
    family_name: string; // Last name of the user
    iat: string; // Issued at timestamp
    exp: string; // Expiration timestamp
    jti: string; // JWT ID (unique identifier for the token)
    alg: string; // Algorithm used
    kid: string; // Key ID used to sign the token
    typ: string; // Type of the token (e.g., JWT)
}

const queries = {
    verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
        const googleToken = token;
        const googleOAuthURL = new URL('https://oauth2.googleapis.com/tokeninfo');
        googleOAuthURL.searchParams.set('id_token', googleToken);

        const { data } = await axios.get<GoogleTokenResult>(googleOAuthURL.toString(), {
            responseType: 'json'
        });

        console.log(data);

        const user = await prismaClient.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (!user) {
            await prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name,
                    lastName: data.family_name,
                    profileImageURL: data.picture
                }
            });
        }

        const userInDb = await prismaClient.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (!userInDb) {
            throw new Error('User not found');
        }

        const userToken = await JWTService.generateTokenForUser(userInDb.id);

        return userToken;

    }
}

export const resolvers = { queries };
