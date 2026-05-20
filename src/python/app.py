import os
import subprocess

def run_command(user_input):
    # Potential command injection vulnerability for testing
    result = subprocess.run(f"echo {user_input}", shell=True, capture_output=True)
    return result.stdout

def read_file(filename):
    # Potential path traversal vulnerability for testing
    with open("/app/data/" + filename, "r") as f:
        return f.read()

if __name__ == "__main__":
    print("Hello from Python!")
    user_cmd = input("Enter command: ")
    run_command(user_cmd)
