import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserController {
    async register(req: any, res: any) {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        }).then((result) => {
            res.json(result).statusMessage('User created');
        }).catch((err) => {
            res.json(err).statusMessage('User not created');
        });
    }
}

export default new UserController();