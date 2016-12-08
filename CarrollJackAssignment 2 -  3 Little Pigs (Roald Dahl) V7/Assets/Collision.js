#pragma strict

var sound : AudioClip;

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "Triplet")
    {
   GetComponent.<AudioSource>().PlayOneShot(sound);
      Destroy(gameObject);
    }
}