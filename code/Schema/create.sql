-- use database 'wechat';
-- clean the all records in the column "Product.Name"
-- delete all trailing whitespace from the column "Product.Name"

UPDATE Product SET Name = TRIM(Name);
