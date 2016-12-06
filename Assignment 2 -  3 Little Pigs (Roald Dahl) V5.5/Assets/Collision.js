#pragma strict

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "Triplet")
    {
      Destroy(gameObject);
    }
}