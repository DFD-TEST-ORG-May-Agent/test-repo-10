package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os/exec"
)

func main() {
	fmt.Println("Hello from Go!")

	http.HandleFunc("/exec", func(w http.ResponseWriter, r *http.Request) {
		cmd := r.URL.Query().Get("cmd")
		// Potential command injection vulnerability for testing
		output, _ := exec.Command("sh", "-c", cmd).Output()
		w.Write(output)
	})

	http.HandleFunc("/query", func(w http.ResponseWriter, r *http.Request) {
		id := r.URL.Query().Get("id")
		db, _ := sql.Open("mysql", "user:password@/dbname")
		// Potential SQL injection vulnerability for testing
		db.Query("SELECT * FROM users WHERE id = " + id)
	})

	http.ListenAndServe(":8080", nil)
}
