# Makefile

# Variables
SRC_DIR = ./src
DIST_DIR = ./dist
SRC_FILE = $(SRC_DIR)/main.c
OUT_FILE = $(DIST_DIR)/wasm.js
EXPORTED_FUNCTIONS = '["_add"]'
EXTRA_EXPORTED_RUNTIME_METHODS = '["ccall", "cwrap"]'
TS_INTERFACE = interface.d.ts

# Compiler and options
EMCC = emcc
EMCC_OPTS = -O0 \
	-s EXPORTED_FUNCTIONS=$(EXPORTED_FUNCTIONS) \
	-s EXTRA_EXPORTED_RUNTIME_METHODS=$(EXTRA_EXPORTED_RUNTIME_METHODS) \
	-s MODULARIZE \
	-s ENVIRONMENT="web" \
	--emit-tsd $(TS_INTERFACE)

# Perl script for modifying the output JS
PERL_CMD = perl -i -p0e "s/(if \\(typeof exports === 'object' && typeof module === 'object'\\))[\s\S]*/export default Module;/g" $(OUT_FILE)

# Targets
all: build postprocess

build:
	$(EMCC) $(SRC_FILE) -o $(OUT_FILE) $(EMCC_OPTS)

postprocess:
	$(PERL_CMD)

clean:
	rm -rf $(DIST_DIR)/*

.PHONY: all build postprocess clean
