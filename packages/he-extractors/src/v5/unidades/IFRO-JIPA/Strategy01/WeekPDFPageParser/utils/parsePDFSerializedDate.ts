export const parsePDFSerializedDate = (
  serializedDate: string
): [number, number] => {
  const startDayParts = serializedDate.split("/");

  const day = +startDayParts[0];
  const month = +startDayParts[1];

  return [day, month];
};
