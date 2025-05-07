<!-- filepath: e:\New folder (3)\connect.php -->
<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blogbuzz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $blogTitle = $conn->real_escape_string($_POST['blog-title']);
    $blogCategory = $conn->real_escape_string($_POST['blog-category']);
    $blogContent = $conn->real_escape_string($_POST['blog-content']);

    // Insert data into the database
    $sql = "INSERT INTO blogs (title, category, content, created_at) VALUES ('$blogTitle', '$blogCategory', '$blogContent', NOW())";

    if ($conn->query($sql) === TRUE) {
        echo "New blog post created successfully!";
        echo "<br><a href='blogs.html'>View Blogs</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>