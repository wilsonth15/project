<?php
include ("database.php");


$sql = "SELECT id, names, region, place FROM memberdata";
$result= $conn->query($sql);

    if ($result->num_rows> 0)
        {
        $i= 0 ;
            while($row = mysqli_fetch_assoc($result))
            {
                //rows data->memb array
                $memb[$i]['id'] = $row['id'];
                $memb[$i]['names'] = $row['names'];
                $memb[$i]['region'] = $row['region'];
                $memb[$i]['place'] = $row['place'];
                $i++;
            }

          print json_encode($memb); //to json formal
        }
    else
        {
            http_response_code(404);
        }
        
$conn->close();
?>