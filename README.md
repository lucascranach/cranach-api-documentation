# cranach-api-documentation

Command to generate the documentation:

```
docker run --rm \
-v ${PWD}:/local \
openapitools/openapi-generator-cli generate \
-i /local/src/cranach-api.yml \
-g html2 \
-o /local/docs/
```