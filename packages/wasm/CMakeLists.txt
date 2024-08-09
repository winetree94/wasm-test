cmake_minimum_required(VERSION 3.0)
project(MyWasmProject)

# Set the source file
set(SRC_FILE ${CMAKE_SOURCE_DIR}/src/main.c)

# Set the output directory
set(DIST_DIR ${CMAKE_SOURCE_DIR}/dist)

# Set the output file name
set(TARGET_NAME wasm)

# Use emcc as the compiler
set(CMAKE_C_COMPILER emcc)
set(CMAKE_CXX_COMPILER emcc)

# Add a custom command to invoke emcc directly
add_custom_command(
    OUTPUT ${DIST_DIR}/wasm.js
    COMMAND emcc ${SRC_FILE} -o ${DIST_DIR}/wasm.js
        -O0
        -s EXPORTED_FUNCTIONS='["_add"]'
        -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'
        -s MODULARIZE
        -s ENVIRONMENT=web
        --emit-tsd=interface.d.ts
    DEPENDS ${SRC_FILE}
    COMMENT "Building WebAssembly module with emcc"
)

# Create a custom target to build the WebAssembly module
add_custom_target(${TARGET_NAME} ALL DEPENDS ${DIST_DIR}/wasm.js)

# Set a custom command to post-process the output JS file
# add_custom_command(
#     TARGET ${TARGET_NAME} POST_BUILD
#     COMMAND perl -i -p0e "s/(if \\(typeof exports === 'object' && typeof module === 'object'\\))[\\s\\S]*/export default Module;/g" ${DIST_DIR}/wasm.js
#     WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
#     COMMENT "Modifying the output JavaScript file..."
# )

# Make sure the dist directory exists
file(MAKE_DIRECTORY ${DIST_DIR})
