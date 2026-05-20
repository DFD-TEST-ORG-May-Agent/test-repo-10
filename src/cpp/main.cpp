#include <iostream>
#include <cstdlib>
#include <fstream>
#include <string>
#include <cstring>

int main(int argc, char* argv[]) {
    std::cout << "Hello from C++!" << std::endl;
    
    if (argc > 1) {
        // Potential buffer overflow vulnerability for testing
        char buffer[64];
        strcpy(buffer, argv[1]);
        std::cout << "Input: " << buffer << std::endl;
        
        // Potential command injection vulnerability
        std::string cmd = "echo " + std::string(argv[1]);
        system(cmd.c_str());
    }
    
    return 0;
}

void readFile(const char* filename) {
    // Potential path traversal vulnerability
    std::string path = "/data/" + std::string(filename);
    std::ifstream file(path);
    std::string content;
    file >> content;
    std::cout << content << std::endl;
}
