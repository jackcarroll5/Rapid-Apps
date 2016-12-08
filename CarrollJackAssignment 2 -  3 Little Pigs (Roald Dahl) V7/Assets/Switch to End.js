import UnityEngine.SceneManagement;
#pragma strict

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "Teenage Red Riding Hood")
    {
      Destroy(gameObject);
      SceneManager.LoadScene("End Game");
    }
}