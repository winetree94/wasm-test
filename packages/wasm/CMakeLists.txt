cmake_minimum_required(VERSION 3.22)
project(wasm C)

# Emscripten 설정
set(CMAKE_C_COMPILER "emcc")
set(CMAKE_CXX_COMPILER "em++")

set(CMAKE_C_STANDARD 11)

# 소스 파일
set(SOURCE_FILES ./src/main.c)

# 출력 디렉토리 설정
# set(OUTPUT_DIR ./dist)
# set(OUTPUT_FILE ${OUTPUT_DIR}/wasm.js)
# set(HEADER_FILE ${OUTPUT_DIR}/interface.d.ts)

# 빌드 명령어 설정
add_executable(${PROJECT_NAME} ${SOURCE_FILES})

set_target_properties(${PROJECT_NAME} PROPERTIES
  COMPILE_FLAGS "-O0 -s EXPORTED_FUNCTIONS='[\"_add\"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='[\"ccall\", \"cwrap\"]' -s MODULARIZE -s ENVIRONMENT=web --emit-tsd interface.d.ts"
)

# 빌드 후 Perl 스크립트 실행
# add_custom_command(TARGET ${PROJECT_NAME}
#   POST_BUILD
#   COMMAND ${CMAKE_COMMAND} -E make_directory ${OUTPUT_DIR}
#   COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/wasm.js ${OUTPUT_FILE}
  # COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/interface.d.ts ${HEADER_FILE}
  # COMMAND perl -i -p0e "s/(if \\(typeof exports === 'object' && typeof module === 'object'\\))[\\s\\S]*/export default Module;/g" ${OUTPUT_FILE}
# )

# 소스 파일
# set(SOURCE_FILES ./src/main.c)


# add_executable(wasm src/main.c)
