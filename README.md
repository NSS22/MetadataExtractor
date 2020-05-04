Extract 'epub' folder from
---
 https://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.zip
---
end put to the root directory

Install dependency:
---
    npm i

Create .env file:
----
    DB_NAME=...
    DB_USERNAME=...
    DB_PASSWORD=...
    DB_HOST=127.0.0.1
(Used PostgresQL as a database )    
    
Run migration:
---
    npm run migrate:schema
    
Run process:
---
    npm start
    
Run test:
---
    npm run test  
    
Check the items are saved to DB:
---
    npm run select:data