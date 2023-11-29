import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address' })
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  line1: string;

  @Column({ nullable: true })
  line2: string;

  @Column()
  pincode: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  type: string;
}

export default Address;
