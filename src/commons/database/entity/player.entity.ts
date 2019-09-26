import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default, HasMany } from 'sequelize-typescript';

@Table
export class Player extends Model<Player> {
  

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.INTEGER)
  victory: number ;

  @Default(() => new Date())
  @CreatedAt
  @Column
  createdAt?: Date;

  @Default(() => new Date())
  @UpdatedAt
  @Column
  updatedAt?: Date;

}