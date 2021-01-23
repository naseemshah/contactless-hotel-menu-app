# SERVER Docs

## API's used
- ## categories
    - ### route - '/addCategory'
    1. request - post
    2. req body - name, type, status
    3. request format - json
    4. response - status, message
    - ### route - '/category'
    1. request - get
    2. res - category details
    - ### route - '/editCategory'
    1. request - post
    2. req body - id, name, type, status
    3. request format - json
    4. response -message
    - ### route - '/editCategory'
    1. request - put
    2. req body - id, status
    3. request format - json
    4. response -message