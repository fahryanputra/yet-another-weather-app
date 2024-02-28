import Query from "Modules/Query";

function createQuery(city) {
  const query = new Query(city);

  return query;
}

export default createQuery;
