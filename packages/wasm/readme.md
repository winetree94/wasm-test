```
emcc ./src/main.c \
  -o ./dist/wasm.js \
  -O0 \
  -s EXPORTED_FUNCTIONS='["_add"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
  -s MODULARIZE \
  -s ENVIRONMENT="web" \
  --emit-tsd interface.d.ts
```
