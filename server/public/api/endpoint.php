<?php

require_once('db_connection.php');

if (mysqli_query($conn, 'select 1')) {
  print(json_encode([
    'success' => true
  ]));
} else {
  http_response_code(500);
  print(json_encode([
    'success' => false
  ]));
}
