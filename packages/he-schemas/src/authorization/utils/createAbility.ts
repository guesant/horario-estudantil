import { createMongoAbility, RawRuleOf } from "@casl/ability";
import { AppAbility } from "../interfaces/AppAbility";

export const createAbility = (rules: RawRuleOf<AppAbility>[]): AppAbility =>
  createMongoAbility<AppAbility>(rules);
