export class User{
    name: string;
    username: string;
    password:{
        pwd: string;
        confirmPwd: string;
    };
    email: string;
    mobile: number;
}