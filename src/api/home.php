<?php
$conn=new mysqli("localhost","root","","asnaf");
$rows = array();

$sql = "SELECT * FROM Home_Offer";
$result = $conn->query($sql) or die("cannot write");
while($row = $result->fetch_assoc()){
	$rows[] = $row;
}

print json_encode(array('serverres'=>$rows));
?>