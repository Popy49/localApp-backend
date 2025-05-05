import { FactorizedAttrs, Factory } from "@jorgebodega/typeorm-factory";
import { AppDataSource } from "src/config/db.config";
import { Owner } from "src/owner/entities/owner.entity";
import UserFactory from "./user.factory";

export default class OwnerFactory extends Factory<Owner> {
    protected entity = Owner;
    protected dataSource = AppDataSource; // Déclarez une propriété locale pour dataSource
  
    protected attrs(): FactorizedAttrs<Owner> {
      return {
        user: async () => new UserFactory().create(),
        storageSpace: []
      };
    }
  }