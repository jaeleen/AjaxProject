<?php
	// load the database and verify the username/password
	$db = mysqli_connect("localhost", "hoeber", "pwd", "hoeber");
	if (!$db) {
		exit ();
	}
	
	if (!isset($_GET['email'])) {
		$email = "";
	} else {
		$email = $_GET['email'];
	}

	$query = "select user_id, email from Users where email like '$email%'";

	if ($result = mysqli_query ($db, $query)) {
	  $json = array("users" => array());
	  while ($row = mysqli_fetch_assoc($result)) {
	    $json["users"][] = $row;
	  } 
	  print json_encode($json);
	  mysqli_free_result($result);
	} 
	mysqli_close($db);
	
?>


