// 4 types of storage class specifiers in C:
// auto
// static
// register
// extern 

#include <stdio.h>
#include "extern_staticfile.c"
//auto is the default storage class for all local variables
void autoo() {
    auto int a = 10; // 'auto' keyword is optional here
    printf("Auto variable a: %d\n", a);
}

//static variable retains its value between function calls or is limited to file scope
void staticExample() {
    static int count = 0; // initialized only once
    count++;
    printf("Static variable count: %d\n", count);
}

//register variable suggests to store the variable in CPU register for faster access but it's just a hint not a guarantee
void registerExample() {
    register int i;
    int sum = 0;
    for (i = 0; i < 100; i++) {
        sum += i;
    }
    printf("Register variable sum: %d\n", sum);
}

//extern variable is defined outside any function and can be accessed across multiple files

int main(){
    //code for auto variable
    autoo();

    //code for static variable
    staticExample();
    staticExample();

    //code for register variable
    registerExample();

    //extern variable
    printf("Extern variable externvar: %d\n", externvar);
    
    printstaticvar();  // acts as a api to access static variable
    // printf("Static variable staticvar: %d\n", staticvar); wll result in a compilation error as staticvar has internal linkage

    return 0;
}