import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialDto } from "./auth-credential.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredencialDto:AuthCredentialDto):Promise<void>{
        const {userName,password} =authCredencialDto
        const user = new User();
        user.userName=userName;
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
    async validatePassword(authCredencialDto:AuthCredentialDto):Promise<string>{
        const {userName,password}=authCredencialDto;
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
