import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
    getHelloService(): string {
        return 'Hello World from User!';
    }
}