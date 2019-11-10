import { Repository, EntityRepository } from "typeorm";
import { UserEntity } from "./user.entity";
import { CredentialDto } from "./credential.dto";
import * as bcrypt from 'bcrypt';
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async signup(credentialDto:CredentialDto):Promise<any>{
        const {userName, password} =credentialDto;
        const user = new UserEntity();
        user.userName = userName;
        user.salt= await bcrypt.genSalt()
        user.password=await this.hashPassword(password,user.salt);
        try{
            await user.save();
        }catch(e){
            if(e.code==='23505'){
                throw new ConflictException('username already exist!!')
            }else{
                throw new InternalServerErrorException()
            }
        }
    }
    //for signin purpose check the password is same
    async validatePassword(credentialDto:CredentialDto):Promise<string>{
        const {userName,password}=credentialDto;
        const user =await this.findOne({userName});

        if(user && user.validatePassword(password)){
            return user.userName;
        }else{
            return null
        }
    }
    private hashPassword(password:string,salt:string):Promise<string>{
        return bcrypt.hash(password,salt);
    }
}
