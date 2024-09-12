import { v4 as uuid } from "uuid";
export const users = [
    {  id: uuid(),
        name: 'Rene c',
        email: 'test@test.cl',
        role:{
            name: "admin"
        }
    },
    {
        id: uuid(),
        name: 'Jane Doe',
        email: 'test2@test2,cl',
        role:{
            name: "user"
        }
    }
];