#pragma strict

var sound : AudioClip;

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "Teenage Red Riding Hood")
    {
      GetComponent.<AudioSource>().PlayOneShot(sound);
      Destroy(gameObject);
      }

}