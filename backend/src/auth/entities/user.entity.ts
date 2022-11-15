import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ValidRoles } from '../interfaces/valid-roles';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  last_name: string;

  @Column('varchar')
  user_name: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    select: false,
  })
  password: string;

  @Column('varchar')
  country: string;

  @Column('varchar')
  gmt: string;

  @Column('varchar')
  phone_number: string;

  @Column({
    type: 'bool',
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ValidRoles,
    default: ValidRoles.user,
  })
  role: ValidRoles;
}
