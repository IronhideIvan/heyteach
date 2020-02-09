import {
  Model,
  Column,
  Scopes,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  PrimaryKey,
  Default,
  IsUUID,
  Unique,
  AllowNull,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import User from "./user";
const uuid = require("uuid/v4");

@Scopes(() => ({
  addresses: {
    include: [
      {
        model: Address,
        through: { attributes: [] }
      }
    ]
  }
}))
@Table
export default class Address extends Model<Address> {
  @IsUUID(4)
  @PrimaryKey
  @Default(() => uuid())
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  lineOne!: string;

  @Column(DataType.STRING(255))
  lineTwo?: string;

  @Column(DataType.STRING(255))
  city?: string;

  @Column(DataType.STRING(2))
  state?: string;

  @Column(DataType.STRING(10))
  zip?: string;

  @AllowNull(false)
  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(false)
  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;
}