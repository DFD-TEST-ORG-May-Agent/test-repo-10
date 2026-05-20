package com.example;

import java.sql.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello from Java!");
        
        // Potential SQL injection vulnerability for testing
        String userInput = args.length > 0 ? args[0] : "test";
        String query = "SELECT * FROM users WHERE id = " + userInput;
        
        // Potential deserialization vulnerability for testing
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("data.ser"));
        Object obj = ois.readObject();
    }
    
    public void readFile(String filename) throws IOException {
        // Potential path traversal vulnerability
        BufferedReader reader = new BufferedReader(new FileReader("/data/" + filename));
        System.out.println(reader.readLine());
    }
}
