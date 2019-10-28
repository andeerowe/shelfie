UPDATE scproducts
SET name = $1, img = $2, price = $3
WHERE id = $4

returning *