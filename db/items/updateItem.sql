update from tableName set 
    name=$2,
    price =$3,
    description=$4
where item_id = $1;