set(CMAKE_SYSTEM_NAME Windows)
set(CMAKE_SYSTEM_PROCESSOR x86_64)

set(CMAKE_C_COMPILER x86_64-w64-mingw32-gcc)
set(CMAKE_CXX_COMPILER x86_64-w64-mingw32-g++)



# To run the CMake build with this toolchain file, use the following commands:
# mkdir build-windows && cd build-windows
# cmake .. -DCMAKE_TOOLCHAIN_FILE=../windows.toolchain.cmake
# make