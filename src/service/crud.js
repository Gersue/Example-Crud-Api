const { listItems } = require("../model/crudModel");
const { request, response } = require("express");

/*
List
Registre
Get ID
Delete
Update

*/
/*
{
    "id":"",
    "name":"",
    "age": 0,
    "deleted":true || false ,
    "created":utc || fecha
}

*/

//list de items
const listItemFunc = (req = request, res = response) => {
  const items = listItems();
  if (items && items.length) {
    res.status(200).json({
      status: 200,
      data: items,
    });
  } else {
    res.status(200).json({
      status: 200,
      msg: "Items empty",
    });
  }
};

module.exports = { listItemFunc };
