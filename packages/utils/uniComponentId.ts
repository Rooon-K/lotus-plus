const lastId: any = {};

export default function uniComponentId(name: string): string {
  if (!lastId[name]) {
    lastId[name] = 0;
  }
  lastId[name]++;
  return `${name}-${lastId[name]}`;
}
