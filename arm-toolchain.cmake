set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_SYSTEM_PROCESSOR arm)

set(CMAKE_C_COMPILER arm-linux-gnueabi-gcc)
set(CMAKE_CXX_COMPILER arm-linux-gnueabi-g++)

# you can set additional flags here if needed


# To run the CMake build with this toolchain file, use the following commands:

# mkdir build-arm && cd build-arm
# cmake .. -DCMAKE_TOOLCHAIN_FILE=../arm-toolchain.cmake
# make

