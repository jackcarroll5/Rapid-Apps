#pragma strict

var sound : AudioClip;

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "Wolf")
    {
      GetComponent.<AudioSource>().PlayOneShot(sound);
      Destroy(gameObject);
      }
}