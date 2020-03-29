// 主に reducer での Entiry たちの normalize に利用する
export function replaceRelationById(entities, relation, idKey = "id") {
  return entities.map(item => ({
    ...item,
    [relation]: item[relation][idKey]
  }));
}
export function extractRelation(entities, relation) {
  return entities.map(entity => entity[relation]);
}
export function byId(entities, idKey = "id") {
  let res = {};
  for (const entity of entities) {
    res[entity[idKey]] = entity;
  }
  return res;
}
export function allIds(entities, idKey = "id") {
  return [...new Set(entities.map(entity => entity[idKey]))];
}
