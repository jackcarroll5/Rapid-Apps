#pragma strict

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "ThirdPersonController")
    {
      Destroy(gameObject);
    }
}