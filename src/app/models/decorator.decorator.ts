export function printLog(
  target: Object,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function ([...args]) {
    const result = originalMethod.apply(this, args);

    console.log(`-- ${propertyName}() returned: `, result);
    return result;
  };
  return descriptor;
}
