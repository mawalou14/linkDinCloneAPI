import { UserEntity } from "src/auth/modules/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed_post')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' }) 
    body: string;

    @CreateDateColumn() 
    created_at: Date;    

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.feedPosts)
    author: UserEntity;
}