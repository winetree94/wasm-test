#include <stdio.h>

int main(int argc, char **argv)
{
    printf("Hello, from wasm!\n");
    return 1;
}

int add(int a, int b)
{
    return a + b;
}
