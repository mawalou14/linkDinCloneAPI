import { UserEntity } from "src/auth/modules/user.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed_post')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' }) 
    body: string;

    @CreateDateColumn() 
    created_at: Date;    

    @OneToMany(() => UserEntity, (userENtity) => userENtity.feedPosts)
    author: UserEntity;
}