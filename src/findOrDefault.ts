type Value = null | string | undefined;
type Conditions = { [key: string]: string } & { _?: string };
type FindOrDefaultReturn = string | boolean;
type FindOrDefaultParams = (value: Value, conditions: Conditions) => FindOrDefaultReturn;

export const findOrDefault: FindOrDefaultParams = (value = null, conditions = {}) => {
  try {
    if (value && conditions[value]) {
      return conditions[value];
    }
    return conditions?._ ?? false;
  } catch (error) {
    return conditions?._ ?? false;
  }
};
