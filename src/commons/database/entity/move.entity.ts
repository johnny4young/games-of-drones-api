import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default, HasMany } from 'sequelize-typescript';

@Table
export class Move extends Model<Move> {

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.INTEGER)
  size: number;

  @Default(() => new Date())
  @CreatedAt
  @Column
  createdAt?: Date;

  @Default(() => new Date())
  @UpdatedAt
  @Column
  updatedAt?: Date;

}
