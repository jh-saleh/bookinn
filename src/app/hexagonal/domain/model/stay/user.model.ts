export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email?: string;
    password?: string;
}

export interface UserApi extends User {

}