import { actions } from "../spec/actions";
import { subjects } from "../spec/subjects";
import { ForcedSubject } from "@casl/ability";

export type Abilities = [
  typeof actions[number],
  (
    | typeof subjects[number]
    | ForcedSubject<Exclude<typeof subjects[number], "all">>
  )
];
