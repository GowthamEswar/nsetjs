export class userDto{
    readonly FirstName: string;
    readonly LastName: string;
    readonly EmailId: string;
    readonly PhoneNumber: number;
    readonly Password: string;
}

export class loginDTO{
    readonly EmailId: string;
    readonly Password: string;
}