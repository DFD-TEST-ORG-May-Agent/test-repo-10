use std::process::Command;
use std::fs;

fn main() {
    println!("Hello from Rust!");
    
    // Example unsafe code for testing
    let user_input = std::env::args().nth(1).unwrap_or_default();
    
    // Potential command injection (unsafe usage pattern)
    let output = Command::new("sh")
        .arg("-c")
        .arg(&format!("echo {}", user_input))
        .output()
        .expect("Failed to execute");
    
    println!("{}", String::from_utf8_lossy(&output.stdout));
}

fn read_file(filename: &str) -> String {
    // Potential path traversal vulnerability for testing
    let path = format!("/data/{}", filename);
    fs::read_to_string(path).unwrap_or_default()
}
